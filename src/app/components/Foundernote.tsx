'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Foundernote() {
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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-ink text-paper overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-dots-light" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Photo column */}
        <div
          className={`lg:col-span-5 transition-all duration-1000 ${
            seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-iris/30 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-pastel-yellow/30 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 aspect-[4/5] bg-white/5">
              <Image
                src="/assets/founder.jpg"
                alt="Dr. Preeti Mishra, Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] tracking-[0.25em] uppercase text-paper/70 mb-1">
                  Founder
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl">
                  Dr. Preeti Mishra
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote column */}
        <div
          className={`lg:col-span-7 transition-all duration-1000 delay-150 ${
            seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-paper/70">
              From the founder
            </span>
          </div>

          <div
            className="font-display text-iris leading-none mb-2"
            style={{ fontSize: '5rem' }}
            aria-hidden
          >
            "
          </div>

          <blockquote
            className="font-display font-bold leading-[1.05] tracking-[-0.025em] text-paper"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
          >
            Race ko choro, give{' '}
            <span className="text-iris-300 italic">dreams</span> their own{' '}
            <span className="text-iris-300 italic">sky</span> — woh wahin{' '}
            <span className="text-iris-300 italic">belong</span> karte hain.
          </blockquote>

          <p className="mt-8 text-base sm:text-lg text-paper/65 max-w-2xl leading-relaxed">
            We didn't build Conatus Bharat to make children faster, smarter, or
            more competitive. We built it so each one knows who they are — and
            walks toward it without flinching.
          </p>
        </div>
      </div>
    </section>
  );
}
