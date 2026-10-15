'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import ParticleField from './ParticleField';

const STEPS = [
  { icon: 'M4 6h16M4 12h16M4 18h10', text: 'Read the customer message and detected intent', t: '0.4s' },
  { icon: 'M3 7l9-4 9 4v10l-9 4-9-4z', text: 'Looked up order #4821 in the store database', t: '0.9s' },
  { icon: 'M12 8v4l3 2M12 3a9 9 0 100 18 9 9 0 000-18z', text: 'Found the delay: courier hold, new date 14 Oct', t: '1.3s' },
  { icon: 'M3 6l9 7 9-7M3 6v12h18V6', text: 'Wrote a reply with the new delivery date', t: '2.1s' },
  { icon: 'M5 12.5l4.5 4.5L19 7', text: 'Reply sent and ticket closed', t: '2.4s', final: true },
];

const HEADLINE = ['Intelligent', 'software,', 'built', 'to'];

export default function Hero() {
  const [shown, setShown] = useState(0);
  const stageRef = useRef(null);

  // Console log plays once, then the agent loops again every few seconds
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(STEPS.length);
      return;
    }
    let timers = [];
    const play = () => {
      setShown(0);
      timers = STEPS.map((_, i) => setTimeout(() => setShown(i + 1), 900 + i * 850));
      timers.push(setTimeout(play, 900 + STEPS.length * 850 + 6000));
    };
    play();
    return () => timers.forEach(clearTimeout);
  }, []);

  // 3D tilt following the mouse
  useEffect(() => {
    const stage = stageRef.current;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!stage || !fine || reduce) return;

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty('--ry', `${px * 9}deg`);
      stage.style.setProperty('--rx', `${py * -9}deg`);
    };
    const onLeave = () => {
      stage.style.setProperty('--ry', '0deg');
      stage.style.setProperty('--rx', '0deg');
    };
    stage.addEventListener('mousemove', onMove);
    stage.addEventListener('mouseleave', onLeave);
    return () => {
      stage.removeEventListener('mousemove', onMove);
      stage.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const done = shown === STEPS.length;

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <i className="orb o1"></i>
        <i className="orb o2"></i>
        <i className="orb o3"></i>
        <div className="grid-lines"></div>
        <ParticleField />
        <div className="hero-fade"></div>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill rise" style={{ '--d': '100ms' }}>
            <i className="pulse-dot"></i>
            Building Intelligent Solutions
          </span>

          <h1>
            {HEADLINE.map((w, i) => (
              <Fragment key={w}>
                <span className="w rise" style={{ '--d': `${200 + i * 80}ms` }}>{w}</span>{' '}
              </Fragment>
            ))}
            <span className="gold-text rise" style={{ '--d': '560ms' }}>
              run your business.
            </span>
          </h1>

          <p className="hero-lead rise" style={{ '--d': '700ms' }}>
            NexVora designs and builds AI agents, workflow automations, machine learning models, and
            full-stack websites for businesses that want working software, not slide decks.
          </p>

          <div className="hero-actions rise" style={{ '--d': '820ms' }}>
            <a href="#book" className="btn btn-gold">
              Book a service
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#pricing" className="btn btn-line">View pricing</a>
          </div>

          <p className="hero-note rise" style={{ '--d': '940ms' }}>
            Packages from <strong>₹1,999</strong>. Final price depends on your requirements.
          </p>
        </div>

        <div className="stage rise" style={{ '--d': '500ms' }} ref={stageRef}>
          <div className="chip c1" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01" /></svg>
            AI agents
          </div>
          <div className="chip c2" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M8.3 7.2l7.4 3.6M8.3 16.8l7.4-3.6" /></svg>
            Automations
          </div>
          <div className="chip c3" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 15l4-4 3 3 5-6" /></svg>
            ML models
          </div>

          <div className="console" role="img" aria-label="Example of an AI agent completing a task for a business">
            <div className="console-bar">
              <div className="dots" aria-hidden="true"><i></i><i></i><i></i></div>
              <span>Support agent</span>
              <span className={`status${done ? ' done' : ''}`}>{done ? 'Done' : 'Working'}</span>
            </div>
            <div className="console-task">
              <small>Task</small>
              Reply to a customer asking about order delay
            </div>
            <div className="log">
              {STEPS.map((s, i) => (
                <div key={s.text} className={`log-row${s.final ? ' final' : ''}${i < shown ? ' in' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                  <span>{s.text}</span>
                  <span className="t">{s.t}</span>
                </div>
              ))}
              <div className={`typing${done ? ' off' : ''}`} aria-hidden="true"><i></i><i></i><i></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
