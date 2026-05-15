'use client';

import React, { useEffect, useRef, useState } from 'react';

const beliefs = [
  {
    line: 'Every child is gifted.',
    tail: 'Just not in the same way.',
    bg: 'bg-pastel-blue',
  },
  {
    line: 'Talent needs',
    tail: 'direction, not conformity.',
    bg: 'bg-pastel-yellow',
  },
  {
    line: 'Education should adapt',
    tail: 'to the student.',
    bg: 'bg-pastel-pink',
  },
  {
    line: 'Understanding comes',
    tail: 'before instruction.',
    bg: 'bg-pastel-green',
  },
];

export default function Pillars() {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="believe"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-paper text-ink overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              What we believe
            </span>
          </div>
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Four lines.
            <br />
            <span className="text-ink/40">One philosophy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl ${b.bg} text-ink p-7 sm:p-9 overflow-hidden border border-ink/5 transition-all duration-700 hover:-translate-y-1 ${
                seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div
                className="font-display font-bold leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                <div className="text-ink/55">{b.line}</div>
                <div className="text-ink mt-1">{b.tail}</div>
              </div>

              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full border-[10px] border-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
