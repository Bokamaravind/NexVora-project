import Reveal from './Reveal';

const icon = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const SERVICES = [
  {
    title: 'AI agents',
    text: 'Assistants that answer customers, qualify leads, search your documents, and take actions in your tools.',
    tags: ['Chatbots', 'Voice agents', 'Document Q&A'],
    icon: icon(<><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5" /></>),
  },
  {
    title: 'Business automations',
    text: 'Connect your apps and remove repetitive work: invoices, reports, emails, data entry, and follow-ups.',
    tags: ['Workflows', 'API integrations', 'Scheduled jobs'],
    icon: icon(<><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M8.3 7.2l7.4 3.6M8.3 16.8l7.4-3.6" /></>),
  },
  {
    title: 'Machine learning models',
    text: 'Predictive models trained on your data for forecasting, classification, recommendations, and anomaly detection.',
    tags: ['Prediction', 'Classification', 'Model deployment'],
    icon: icon(<><path d="M4 20V4M4 20h16" /><path d="M8 15l4-4 3 3 5-6" /></>),
  },
  {
    title: 'Full-stack websites',
    text: 'Fast, responsive websites and web apps with a secure backend, database, and admin panel.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: icon(<><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>),
  },
  {
    title: 'AI-powered web apps',
    text: 'Complete products with AI built in: smart search, content generation, automated insights, and chat interfaces.',
    tags: ['LLM integration', 'Dashboards', 'SaaS products'],
    icon: icon(<><path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z" /><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" /></>),
  },
  {
    title: 'Custom software products',
    text: 'Something specific in mind? We scope it, design it, and build it from the first screen to deployment.',
    tags: ['Web apps', 'Internal tools', 'MVPs'],
    icon: icon(<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />),
  },
];

export default function Services() {
  return (
    <section id="services" className="sec services">
      <div className="wrap">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">Services</span>
            <h2>What we build</h2>
            <p>Every product is built around your process and delivered as clean, documented code you own.</p>
          </div>
          <a href="#book" className="btn btn-line">Discuss your project</a>
        </Reveal>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} className="svc-card" delay={(i % 3) * 110} spotlight>
              <div className="svc-icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="tags">
                {s.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
