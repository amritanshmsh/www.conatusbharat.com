'use client';

import React, { useEffect, useRef, useState } from 'react';
import LoopLogo from './LoopLogo';

export default function RoadmapNote() {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-paper text-ink overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div
        className={`relative max-w-4xl mx-auto text-center transition-all duration-700 ${
          seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="inline-flex items-center justify-center mb-8">
          <LoopLogo size={40} tone="iris" spinning />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink/[0.04] border border-ink/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-iris" />
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-ink/70">
            What we're working toward
          </span>
        </div>

        <h2
          className="font-display font-bold leading-[0.95] tracking-[-0.03em] mb-7"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Wonder is the first piece
          <br />
          of a larger system.
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-ink/70 max-w-2xl mx-auto mb-3">
          Over time, Conatus Bharat will grow into a connected set of tools:
          helping schools run, helping students discover what they love,
          helping families see learning clearly.
        </p>

        <p className="text-base sm:text-lg leading-relaxed font-semibold text-ink mt-6">
          We'll show new tools when they exist. Not before.
        </p>
      </div>
    </section>
  );
}
