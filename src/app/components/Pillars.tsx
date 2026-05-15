'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Eye, Compass, Zap, Heart, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    no: '01',
    title: 'See the student',
    desc: 'Strengths, gaps, learning style — not just marks.',
    bg: 'bg-pastel-blue',
    icon: <Eye size={26} strokeWidth={2} />,
    span: 'sm:col-span-2 sm:row-span-2',
    big: true,
  },
  {
    no: '02',
    title: 'Adapt to them',
    desc: 'Personalised paths that meet learners where they are.',
    bg: 'bg-pastel-yellow',
    icon: <Compass size={22} strokeWidth={2} />,
    span: 'sm:col-span-2',
  },
  {
    no: '03',
    title: 'Lift the teacher',
    desc: 'Less paperwork, more teaching time.',
    bg: 'bg-pastel-pink',
    icon: <Zap size={22} strokeWidth={2} />,
    span: 'sm:col-span-1',
  },
  {
    no: '04',
    title: 'Build belief',
    desc: 'Confidence is the curriculum.',
    bg: 'bg-pastel-green',
    icon: <Heart size={22} strokeWidth={2} />,
    span: 'sm:col-span-1',
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
      id="pillars"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-paper text-ink overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              How we think
            </span>
          </div>
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Four ideas.
            <br />
            <span className="text-ink/40">One philosophy.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 max-w-xl">
            Not a curriculum. Not a coaching format. A way of thinking that
            puts the learner at the centre — every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.no}
              className={`group relative rounded-3xl ${p.bg} text-ink p-6 sm:p-7 overflow-hidden border border-ink/5 transition-all duration-700 hover:-translate-y-1 ${
                p.span
              } ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="w-11 h-11 rounded-xl bg-ink text-paper inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </span>
                <span className="font-display text-2xl font-bold text-ink/30">
                  {p.no}
                </span>
              </div>

              <div className={`mt-5 ${p.big ? 'sm:mt-12' : ''}`}>
                <h3
                  className={`font-display font-bold leading-tight ${
                    p.big ? 'text-3xl sm:text-5xl' : 'text-xl sm:text-2xl'
                  }`}
                >
                  {p.title}
                </h3>
                <p className={`mt-2 text-ink/65 ${p.big ? 'text-base sm:text-lg' : 'text-sm'}`}>
                  {p.desc}
                </p>
              </div>

              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>

              {/* Soft watermark loop */}
              <div className={`absolute -bottom-12 -left-12 rounded-full border-ink/10 ${p.big ? 'w-56 h-56 border-[12px]' : 'w-32 h-32 border-[8px]'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
