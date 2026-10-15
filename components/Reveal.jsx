'use client';

import { useEffect, useRef } from 'react';

/**
 * Fades + slides its content in when it scrolls into view.
 * With `spotlight`, a gold glow also follows the mouse inside the element.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  spotlight = false,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = spotlight
    ? (e) => {
        const el = ref.current;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal${spotlight ? ' spot' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms` }}
      onMouseMove={onMove}
      {...rest}
    >
      {children}
    </Tag>
  );
}
