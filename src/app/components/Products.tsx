'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import LoopLogo from './LoopLogo';

const features = [
  {
    n: '01',
    title: 'Adaptive practice',
    body: 'From Grade 3. Wonder watches how each student answers, then changes the next question to match.',
  },
  {
    n: '02',
    title: 'Career diagnostic',
    body: 'From Grade 8. A long, slow read of strengths and inclinations, written into a Student Identity Profile.',
  },
  {
    n: '03',
    title: 'For the teacher',
    body: 'Live insights, weekly reports, and the time back to actually teach. Built for CBSE, NEP-aligned.',
  },
];

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="wonder"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-paper text-ink overflow-hidden"
    >
      {/* Restrained graphic background, only iris */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-iris/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-iris/[0.04] blur-3xl" />
        {/* Faint outline rings as graphics */}
        <div className="absolute -top-32 right-10 w-72 h-72 rounded-full border border-ink/[0.06]" />
        <div className="absolute -top-20 right-24 w-72 h-72 rounded-full border border-ink/[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-iris" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
                What we're building right now
              </span>
            </div>
            <h2
              className="font-display font-bold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              <span className="relative inline-block">
                <span className="text-iris">Wonder</span>
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-iris/20 rounded-full -z-0" />
              </span>
              .
              <br />
              <span className="text-ink/40">A school in your pocket.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg leading-relaxed text-ink/70">
              Wonder helps schools see every student. How they learn, where
              they're stuck, and what they're becoming.
            </p>
            <p className="mt-3 text-sm text-ink/55">
              Adaptive practice from Grade 3. Career diagnostic from Grade 8.
              Built for CBSE. NEP 2020 aligned. NCERT curriculum.
            </p>
          </div>
        </div>

        {/* Real product mockup */}
        <div
          className={`relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-ink text-paper transition-all duration-1000 ${
            seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Decorative loop watermarks */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[20px] border-white/[0.04]" />
            <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full border-[16px] border-white/[0.04]" />
            <div className="absolute inset-0 bg-dots-light opacity-30" />
            <div className="absolute top-8 left-8 opacity-15">
              <LoopLogo size={80} tone="paper" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 px-7 sm:px-12 lg:px-16 pt-14 sm:pt-16 pb-10 lg:pb-0 items-center">
            {/* Copy + features */}
            <div className="lg:col-span-5 lg:py-16">
              <div className="text-[11px] tracking-[0.3em] uppercase text-paper/55 mb-4 inline-flex items-center gap-2">
                <span className="w-6 h-px bg-iris" />
                wonderclassrooms.com
              </div>

              <h3
                className="font-display font-bold leading-[1.02] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                See every student.
                <br />
                <span className="text-paper/55">Teach to each one.</span>
              </h3>

              <p className="text-base text-paper/70 leading-relaxed mb-10 max-w-md">
                A learning companion that adapts. A teacher dashboard that
                clarifies. Built for the Indian classroom.
              </p>

              <ul className="space-y-5">
                {features.map((f) => (
                  <li key={f.n} className="flex gap-4">
                    <span
                      className="font-display font-bold text-iris/70 leading-none w-10 shrink-0"
                      style={{ fontSize: '1.5rem' }}
                    >
                      {f.n}
                    </span>
                    <div>
                      <div className="font-semibold text-paper text-base mb-1">
                        {f.title}
                      </div>
                      <div className="text-sm text-paper/65 leading-relaxed">
                        {f.body}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="https://wonderclassrooms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-paper text-ink text-sm font-bold hover:bg-iris hover:text-paper transition-all duration-300 hover:scale-105"
                >
                  Explore Wonder
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border-2 border-paper/20 text-sm font-semibold text-paper hover:border-paper/50 hover:bg-white/5 transition-all"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            {/* Product mockup image */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
              {/* Iris glow behind the screen */}
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[80%] h-[60%] rounded-full bg-iris/40 blur-3xl" />
              </div>

              <div className="relative w-full max-w-[640px] aspect-[2158/1400]">
                <Image
                  src="/assets/Official-Color.png"
                  alt="Wonder dashboard on a desktop display"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Single CTA strip below */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <div className="text-sm text-ink/55">
            Wonder is live for schools across India.
          </div>
          <Link
            href="https://wonderclassrooms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-iris transition"
          >
            wonderclassrooms.com
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
