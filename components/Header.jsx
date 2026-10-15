'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'pricing', label: 'Pricing', href: '/#pricing' },
  { id: 'process', label: 'How we work', href: '/#process' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the link of the section in the middle of the screen
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['services', 'pricing', 'process', 'book'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`site-header${scrolled || open ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <Logo />
        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger${open ? ' x' : ''}`}><i></i><i></i><i></i></span>
        </button>
        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={active === l.id ? 'active' : ''}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a href="/#book" className="btn btn-gold btn-sm" onClick={close}>Book a service</a>
        </nav>
      </div>
    </header>
  );
}
