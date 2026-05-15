'use client';

import React, { useEffect, useRef, useState } from 'react';
import LoopLogo from './LoopLogo';

const beliefs = [
  {
    line: 'Every child is gifted.',
    tail: 'Just not in the same way.',
  },
  {
    line: 'Talent needs',
    tail: 'direction, not conformity.',
  },
  {
    line: 'Education should adapt',
    tail: 'to the student.',
  },
  {
    line: 'Understanding comes',
    tail: 'before instruction.',
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
      {/* Restrained graphic background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-10 opacity-[0.06]">
          <LoopLogo size={280} tone="ink" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              What we believe
            </span>
          </div>
          <h2
            className="font-display font-bold leading-[1.02] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Four lines.
            <br />
            <span className="text-ink/40">One philosophy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className={`group relative bg-paper p-8 sm:p-10 transition-all duration-700 hover:bg-ink hover:text-paper ${
                seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-display font-bold text-iris/30 group-hover:text-iris/60 transition-colors leading-none"
                  style={{ fontSize: '2rem' }}
                >
                  0{i + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-iris/40 group-hover:bg-iris transition-colors mt-2" />
              </div>

              <div
                className="font-display font-bold leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                <div className="text-current opacity-50 group-hover:opacity-60 transition-opacity">
                  {b.line}
                </div>
                <div className="text-current mt-1">{b.tail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
