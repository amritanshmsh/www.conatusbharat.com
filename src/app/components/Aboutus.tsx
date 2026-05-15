'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Eye, AlertTriangle, Brain, Sparkles } from 'lucide-react';

const Aboutus = () => {
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
      id="about"
      ref={ref}
      className="relative bg-ink text-paper py-24 sm:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-dots-light" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-iris/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-pink/80 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pastel-pink" />
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-paper/70">
                The Reality
              </span>
            </div>

            <h2
              className="font-display font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              260M children.
              <br />
              <span className="text-paper/40">One rigid system.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-base sm:text-lg leading-relaxed text-paper/70">
              India's classrooms are full. The system is fast. But somewhere
              along the way, the student became a number.
            </p>
            <p className="mt-3 text-iris-300 text-sm font-semibold uppercase tracking-widest">
              We're here to change that.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(140px,auto)] gap-4">
          {/* Big stat card — pastel pink */}
          <div
            className={`sm:col-span-3 lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-pastel-pink text-ink relative overflow-hidden transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '60ms' }}
          >
            <AlertTriangle size={20} className="opacity-50" />
            <div
              className="font-display font-bold leading-none mt-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              93%
            </div>
            <div className="mt-2 text-sm font-semibold">
              don't know their strengths
            </div>
            <div className="text-xs text-ink/60 mt-1">by the time they leave school</div>
            {/* Soft watermark loop */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border-[10px] border-ink/10" />
          </div>

          {/* Stat — pastel yellow */}
          <div
            className={`sm:col-span-3 lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-pastel-yellow text-ink relative overflow-hidden transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '160ms' }}
          >
            <Brain size={20} className="opacity-60" />
            <div
              className="font-display font-bold leading-none mt-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              1 in 7
            </div>
            <div className="mt-2 text-sm font-semibold">
              has anxiety from school pressure
            </div>
            <div className="text-xs text-ink/60 mt-1">a generation of self-doubt</div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border-[8px] border-ink/10" />
          </div>

          {/* Big stat — iris */}
          <div
            className={`sm:col-span-6 lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-iris text-paper relative overflow-hidden transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '260ms' }}
          >
            <Eye size={20} className="opacity-80" />
            <div
              className="font-display font-bold leading-none mt-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              260M+
            </div>
            <div className="mt-2 text-sm font-semibold">students in India</div>
            <div className="text-xs text-paper/70 mt-1">taught with one rigid system</div>
            <div className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full border-[10px] border-white/15" />
          </div>

          {/* Video — wide */}
          <div
            className={`sm:col-span-6 lg:col-span-8 rounded-3xl overflow-hidden bg-black relative border border-white/10 transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '360ms', minHeight: 320 }}
          >
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-iris text-paper text-[10px] font-bold tracking-widest uppercase shadow-lg">
              <Sparkles size={11} />
              Watch · 2 min
            </div>
            <video
              controls
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
              style={{ minHeight: 320, maxHeight: 560 }}
            >
              <source src="/assets/Problem.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Side quote card */}
          <div
            className={`sm:col-span-6 lg:col-span-4 rounded-3xl p-7 sm:p-8 bg-white/[0.04] border border-white/10 flex flex-col justify-between transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '460ms' }}
          >
            <div>
              <div
                className="font-display text-iris-300 mb-3 leading-none"
                style={{ fontSize: '4rem' }}
              >
                "
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-paper/85">
                The same test, the same path, the same finish line — for 260
                million different minds. That's not education. That's
                averaging.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] tracking-[0.25em] uppercase text-paper/50">
                The Conatus Brief
              </span>
              <span className="text-iris-300 text-sm font-bold">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
