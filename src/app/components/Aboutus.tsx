'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Aboutus() {
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
      id="belief"
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
              <span className="w-1.5 h-1.5 rounded-full bg-iris-300" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-paper/70">
                Why we exist
              </span>
            </div>

            <h2
              className="font-display font-bold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)' }}
            >
              Every child is gifted.
              <br />
              <span className="text-paper/40">Just not in the same way.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-base sm:text-lg leading-relaxed text-paper/70">
              For years, students have been measured by a narrow definition of
              success. We're building a different kind of company. One that
              adapts to the student, not the other way around.
            </p>
          </div>
        </div>

        {/* Three lines + video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Three quiet truth cards */}
          <div
            className={`lg:col-span-5 grid grid-cols-1 gap-4 transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { line: 'If they struggled in math,', tail: 'they were called weak.' },
              { line: 'If they excelled in creativity,', tail: 'it was called a hobby.' },
              { line: 'If they explored beyond the syllabus,', tail: 'it was discouraged.' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.06] hover:border-white/15 transition"
              >
                <div className="text-paper/60 text-sm sm:text-base">{item.line}</div>
                <div className="text-paper text-base sm:text-lg font-semibold mt-1">
                  {item.tail}
                </div>
              </div>
            ))}

            <p className="text-paper/65 text-sm sm:text-base leading-relaxed mt-2">
              We don't think that's how minds grow. So we're building a
              different kind of education company.
            </p>
          </div>

          {/* Video, wide */}
          <div
            className={`lg:col-span-7 rounded-3xl overflow-hidden bg-black relative border border-white/10 transition-all duration-700 ${
              seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '160ms', minHeight: 320 }}
          >
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-iris text-paper text-[10px] font-bold tracking-widest uppercase shadow-lg">
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
        </div>
      </div>
    </section>
  );
}
