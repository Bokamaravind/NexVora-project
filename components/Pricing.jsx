'use client';

import Reveal from './Reveal';
import Counter from './Counter';

const PLANS = [
  {
    id: 'Starter - ₹1,999',
    name: 'Starter',
    for: 'A focused project with a clear, small scope.',
    price: 1999,
    note: 'Starting price',
    features: [
      'Single landing page or simple automation',
      'Responsive on mobile and desktop',
      'Contact or booking form with email',
      'Source code handover',
    ],
  },
  {
    id: 'Standard - ₹2,499',
    name: 'Standard',
    for: 'A complete website or a working AI or automation tool.',
    price: 2499,
    note: 'Typical price, varies with requirements',
    featured: true,
    features: [
      'Multi-page website or AI chatbot',
      'Backend with database',
      'Workflow automation across your apps',
      'Deployment and setup help',
      'Support after delivery',
    ],
  },
  {
    id: 'Advanced - ₹2,999',
    name: 'Advanced',
    for: 'Larger builds with AI, machine learning, or custom logic.',
    price: 2999,
    note: 'Upper range, based on requirements',
    features: [
      'AI-powered full-stack web app',
      'Machine learning model with API',
      'Admin dashboard and user login',
      'Documentation and walkthrough',
    ],
  },
];

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10.5l4 4 8-9" />
  </svg>
);

export default function Pricing() {
  // Tell the booking form which package was chosen
  const choose = (id) => {
    window.dispatchEvent(new CustomEvent('select-package', { detail: id }));
  };

  return (
    <section className="sec pricing" id="pricing">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, transparent pricing</h2>
          <p>
            Pick the package closest to your project. Prices range from ₹1,999 to ₹2,999 depending on
            your requirements, and we confirm the exact amount before any work begins.
          </p>
        </Reveal>

        <div className="plans">
          {PLANS.map((p, i) => (
            <Reveal
              key={p.name}
              className={`plan${p.featured ? ' featured' : ''}`}
              delay={i * 130}
              spotlight
            >
              {p.featured && <span className="badge">Most requested</span>}
              <h3>{p.name}</h3>
              <p className="for">{p.for}</p>
              <div className="price">
                <sup>₹</sup>
                <Counter to={p.price} />
              </div>
              <p className="price-note">{p.note}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><Check />{f}</li>
                ))}
              </ul>
              <a
                href="#book"
                className={`btn btn-block ${p.featured ? 'btn-gold' : 'btn-line'}`}
                onClick={() => choose(p.id)}
              >
                Choose {p.name}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="pricing-foot" delay={200}>
          Not sure which fits? <strong>Book a service</strong> and describe your idea. We reply with a fixed quote.
        </Reveal>
      </div>
    </section>
  );
}
