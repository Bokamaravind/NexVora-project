import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // Nodemailer needs Node, not the Edge runtime

/* ---------- Email transport ---------- */
const port = Number(process.env.SMTP_PORT) || 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ---------- Helpers ---------- */
const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const clean = (value, max) => String(value || '').trim().slice(0, max);
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const row = (label, value) => `
  <tr>
    <td style="padding:10px 0;color:#5A6477;width:140px;vertical-align:top;font-size:14px;">${label}</td>
    <td style="padding:10px 0;color:#172036;font-size:15px;">${value}</td>
  </tr>`;

const wrapEmail = (title, body) => `
  <div style="background:#F2F4F8;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
      <div style="background:#0B1730;padding:24px 32px;">
        <span style="font-family:Georgia,serif;font-size:26px;color:#ffffff;">NexVora</span>
        <span style="display:block;font-size:13px;color:#C9A24D;margin-top:2px;">Building Intelligent Solutions</span>
      </div>
      <div style="padding:32px;">
        <h2 style="margin:0 0 16px;font-family:Georgia,serif;font-size:24px;color:#0B1730;">${title}</h2>
        ${body}
      </div>
    </div>
  </div>`;

/* ---------- Simple rate limit: 5 requests per 15 minutes per IP ---------- */
const hits = new Map();
const WINDOW = 15 * 60 * 1000;
const LIMIT = 5;

function tooMany(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

/* ---------- POST /api/book ---------- */
export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (tooMany(ip)) {
    return Response.json(
      { message: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: 'Invalid request.' }, { status: 400 });
  }

  // Spam trap: bots fill the hidden field. Pretend success and do nothing.
  if (body.website) return Response.json({ ok: true });

  const name = clean(body.name, 80);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 20);
  const service = clean(body.service, 80);
  const plan = clean(body.package, 80);
  const message = clean(body.message, 2000);

  if (!name || !email || !service || !plan || !message) {
    return Response.json({ message: 'Please fill in all required fields.' }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }

  const details = `
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #DDE2EB;">
      ${row('Name', escapeHtml(name))}
      ${row('Email', escapeHtml(email))}
      ${row('Phone', phone ? escapeHtml(phone) : 'Not provided')}
      ${row('Service', escapeHtml(service))}
      ${row('Package', escapeHtml(plan))}
      ${row('Details', escapeHtml(message).replace(/\n/g, '<br>'))}
    </table>`;

  const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;

  try {
    // 1) Email to the company
    await transporter.sendMail({
      from: `"NexVora Website" <${fromAddress}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `New booking: ${service} from ${name}`,
      html: wrapEmail('New service booking', details),
      text: `New booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService: ${service}\nPackage: ${plan}\n\n${message}`,
    });

    // 2) Confirmation email to the customer
    await transporter.sendMail({
      from: `"NexVora" <${fromAddress}>`,
      to: email,
      replyTo: process.env.COMPANY_EMAIL,
      subject: 'We received your request - NexVora',
      html: wrapEmail(
        `Thank you, ${escapeHtml(name)}`,
        `<p style="margin:0 0 20px;color:#5A6477;font-size:15px;line-height:1.6;">
           We have received your booking request. Our team will review your requirements and
           reply within one business day with a fixed quote.
         </p>
         ${details}
         <p style="margin:24px 0 0;color:#5A6477;font-size:14px;">
           Just reply to this email if you want to add anything.
         </p>`
      ),
      text: `Hi ${name},\n\nWe have received your booking request for "${service}" (${plan}). We will reply within one business day with a fixed quote.\n\nNexVora - Building Intelligent Solutions`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Booking email failed:', err.message);
    return Response.json({ message: 'We could not send your request.' }, { status: 500 });
  }
}
