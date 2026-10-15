'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const SERVICES = [
  'AI agent',
  'Business automation',
  'Machine learning model',
  'Full-stack website',
  'AI-powered web app',
  'Custom software product',
];

const PACKAGES = [
  'Starter - ₹999',
  'Standard - ₹1,999',
  'Advanced - ₹2,999',
  'Not sure - need a quote',
];

export default function Booking() {
  const [pkg, setPkg] = useState('');
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  // Pricing buttons send a "select-package" event
  useEffect(() => {
    const onSelect = (e) => setPkg(e.detail);
    window.addEventListener('select-package', onSelect);
    return () => window.removeEventListener('select-package', onSelect);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name.trim() || !data.email.trim() || !data.service || !data.package || !data.message.trim()) {
      return setStatus({ type: 'err', text: 'Please fill in all required fields.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return setStatus({ type: 'err', text: 'Please enter a valid email address.' });
    }

    setSending(true);
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.message || 'Something went wrong.');

      form.reset();
      setPkg('');
      setStatus({ type: 'ok', text: `Request sent. A confirmation email is on its way to ${data.email}.` });
    } catch (err) {
      setStatus({ type: 'err', text: `${err.message} Please try again in a moment.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="sec book" id="book">
      <div className="book-orb" aria-hidden="true"></div>
      <div className="wrap book-grid">
        <Reveal>
          <span className="eyebrow">Get started</span>
          <h2>Book a service</h2>
          <p className="lead">Share a few details and we will get back to you with a quote.</p>
          <ul className="book-points">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 8l9 6 9-6" />
              </svg>
              <div><b>Confirmation by email</b><span>You receive a copy of your request right after you submit.</span></div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              <div><b>Quick reply</b><span>We respond within one business day.</span></div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2.2 2.2L15.5 10" />
              </svg>
              <div><b>No payment to enquire</b><span>You pay only after you approve the quote.</span></div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="form-card" delay={150}>
          <h3>Tell us about your project</h3>
          <p className="sub">All fields marked with * are required.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input id="name" name="name" type="text" autoComplete="name" required maxLength={80} />
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={120} />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={20} />
              </div>
              <div className="field">
                <label htmlFor="service">Service *</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="package">Package *</label>
              <select id="package" name="package" required value={pkg} onChange={(e) => setPkg(e.target.value)}>
                <option value="">Select a package</option>
                {PACKAGES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              <p className="hint">Final price depends on your requirements.</p>
            </div>

            <div className="field">
              <label htmlFor="message">Project details *</label>
              <textarea id="message" name="message" required maxLength={2000} placeholder="What do you want to build, and by when?" />
            </div>

            {/* Spam trap: real people never see or fill this */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className={`form-msg${status.text ? ` show ${status.type}` : ''}`} role="status" aria-live="polite">
              {status.type === 'ok' && (
                <svg className="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" className="tick-c" /><path d="M7.5 12.5l3 3 6-7" className="tick-p" /></svg>
              )}
              <span>{status.text}</span>
            </div>

            <button type="submit" className="btn btn-gold btn-block" disabled={sending}>
              {sending ? 'Sending...' : 'Send booking request'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
