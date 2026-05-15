'use client';

import React from 'react';

type Props = {
  items: string[];
  /** "ink" = black bg + white text · "paper" = white bg + black text · "iris" = indigo */
  tone?: 'ink' | 'paper' | 'iris';
  reverse?: boolean;
};

export default function Marquee({ items, tone = 'ink', reverse = false }: Props) {
  const toneClass =
    tone === 'paper'
      ? 'bg-paper text-ink border-y border-ink/10'
      : tone === 'iris'
      ? 'bg-iris text-paper'
      : 'bg-ink text-paper';

  const dotClass =
    tone === 'paper' ? 'text-iris' : tone === 'iris' ? 'text-paper/70' : 'text-iris-300';

  // Duplicate the list so the loop can shift -50% smoothly.
  const looped = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${toneClass} py-4 sm:py-5 marquee-mask`}>
      <div
        className={`flex whitespace-nowrap gap-10 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ width: 'max-content' }}
      >
        {looped.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span
              className="font-display font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl"
            >
              {item}
            </span>
            <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${dotClass}`}>
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
