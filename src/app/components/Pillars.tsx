"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const pillars = [
  {
    no: '01',
    title: 'See the student',
    desc: 'Understand strengths, gaps, and learning style — not just marks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Adapt to them',
    desc: 'Personalised paths that meet learners where they are.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Lift the teacher',
    desc: 'Reduce workload. Surface what matters. Free up real teaching time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Build belief',
    desc: 'Confidence is the curriculum. Every student can grow with the right mirror.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const Pillars = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 lg:px-12 ${
        isLightMode ? 'bg-gradient-to-b from-gray-50 to-white text-black' : 'bg-gradient-to-b from-black to-[#070707] text-white'
      }`}
    >
      <div className={`absolute inset-0 opacity-[0.05] pointer-events-none ${isLightMode ? '[--g:#000]' : '[--g:#fff]'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--g)_1px,transparent_1px),linear-gradient(to_bottom,var(--g)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`max-w-3xl mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border ${isLightMode ? 'bg-black/[0.03] border-black/10' : 'bg-white/5 border-white/10'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLightMode ? 'bg-black' : 'bg-white'}`} />
            <span className={`text-xs font-medium tracking-widest uppercase ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
              How We Think
            </span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-[1.05] bg-clip-text text-transparent ${
              isLightMode ? 'bg-gradient-to-b from-black to-gray-600' : 'bg-gradient-to-b from-white to-gray-500'
            }`}
            style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
          >
            Four ideas guide
            <br />
            everything we build.
          </h2>
          <p className={`text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Not a curriculum. Not a coaching format. A philosophy that puts the learner first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.no}
              className={`group relative p-7 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                isLightMode
                  ? 'bg-white border-gray-200 hover:border-black/40 hover:shadow-lg'
                  : 'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-white/10 hover:border-white/30'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div
                className={`absolute top-5 right-5 text-3xl font-extrabold opacity-20 ${
                  isLightMode ? 'text-gray-400' : 'text-white'
                }`}
                style={{ fontFamily: 'Antonio, sans-serif' }}
              >
                {p.no}
              </div>

              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 border transition-all ${
                  isLightMode
                    ? 'bg-black text-white border-black group-hover:scale-110'
                    : 'bg-white/5 text-white border-white/10 group-hover:bg-white/10 group-hover:border-white/30 group-hover:scale-110'
                }`}
              >
                {p.icon}
              </div>

              <h3
                className={`text-xl sm:text-2xl font-extrabold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}
                style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.01em' }}
              >
                {p.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                {p.desc}
              </p>

              <div className={`mt-6 h-px w-12 transition-all duration-500 group-hover:w-full ${isLightMode ? 'bg-black/30' : 'bg-white/30'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
