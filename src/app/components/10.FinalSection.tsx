'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import LoopLogo from './LoopLogo';

export default function FinalSection() {
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
      <div
        className={`relative max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-iris text-paper overflow-hidden transition-all duration-1000 ${
          seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full border-[30px] border-white/10" />
          <div className="absolute inset-0 bg-dots-light opacity-50" />
        </div>

        <div className="relative px-7 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/10 border border-paper/20 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-paper/85">
                This is just the beginning
              </span>
            </div>

            <h2
              className="font-display font-bold leading-[0.95] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              More than a launch.
              <br />
              A promise.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-paper/80 max-w-xl leading-relaxed">
              To rethink what learning means. To build tools that truly serve
              children. And to partner with those who dare to believe in
              better.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-paper text-iris text-sm font-bold hover:bg-ink hover:text-paper transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Talk to us
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="https://wonderclassrooms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full border-2 border-paper/30 text-sm font-semibold text-paper hover:border-paper hover:bg-white/5 transition-all"
              >
                Explore Wonder
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-paper/20 blur-2xl scale-110" />
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-paper flex items-center justify-center shadow-2xl">
                <LoopLogo size={120} tone="iris" spinning />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
