'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import LoopLogo from './LoopLogo';

export default function Homepage() {
  const heroRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      setActive(true);
    };
    const onLeave = () => setActive(false);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-paper text-ink pt-28 pb-16 px-4 sm:px-6 lg:px-10"
    >
      {/* Cursor-follow iris dot */}
      <div
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-iris/30 blur-md transition-opacity duration-300 z-[60] hidden md:block ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${pos.x - 12}px, ${
            pos.y + (heroRef.current?.getBoundingClientRect().top || 0) - 12
          }px)`,
        }}
      />

      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-iris/[0.06] blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-pastel-yellow/30 blur-3xl" />
        <div className="absolute inset-0 bg-dots opacity-60" />
      </div>

      {/* Eyebrow */}
      <div className="relative max-w-7xl mx-auto mb-10 flex items-center gap-3">
        <LoopLogo size={20} tone="iris" />
        <span className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-ink/60">
          Conatus Bharat · Own Tomorrow
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-ink/15 to-transparent" />
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-iris">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-iris/50 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-iris" />
          </span>
          Building in public
        </span>
      </div>

      {/* Massive title */}
      <div className="relative max-w-7xl mx-auto">
        <h1
          className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-ink"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 14rem)' }}
        >
          <span className="block animate-fade-in-up [animation-delay:80ms]">CONATUS</span>
          <span
            className="block animate-fade-in-up [animation-delay:200ms]"
            style={{ marginTop: '-0.06em' }}
          >
            <span>BHARAT</span>
            <span className="inline-block align-top text-iris">.</span>
          </span>
        </h1>

        {/* Eyes strip + tagline grid (no more "26") */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-end">
          <div className="relative rounded-3xl overflow-hidden border border-ink/10 bg-ink animate-fade-in-up [animation-delay:340ms] h-[200px] sm:h-[260px] lg:h-[300px]">
            <Image
              src="/assets/Eyes.png"
              alt="Every child sees the world differently."
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7 flex items-center gap-2 text-paper">
              <span className="w-1.5 h-1.5 rounded-full bg-iris animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium tracking-widest uppercase">
                See the student
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:480ms]">
            <p className="text-lg sm:text-xl leading-relaxed text-ink/75 mb-7">
              We build tools that help students
              <span className="font-semibold text-ink"> understand themselves.</span>
              <br />
              <br />
              <span className="text-ink/60 text-base sm:text-lg">
                One platform today. A growing system tomorrow.
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#wonder"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-iris transition-all duration-300 hover:scale-105 glow-iris"
              >
                See Wonder
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/story"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-ink/15 text-sm font-semibold text-ink hover:border-iris hover:text-iris transition"
              >
                Our Story
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="relative max-w-7xl mx-auto mt-16 flex justify-between items-end">
        <div className="text-[11px] tracking-widest uppercase text-ink/40">
          ↓ &nbsp; Why we exist
        </div>
        <div className="hidden md:block text-[11px] tracking-widest uppercase text-ink/40 text-right">
          A place where
          <br />
          understanding begins.
        </div>
      </div>
    </section>
  );
}
