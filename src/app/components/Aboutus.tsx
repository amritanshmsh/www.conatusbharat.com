"use client"
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '260M+',
    label: 'Students in India',
    sub: 'taught with one rigid system',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    value: '93%',
    label: "Don't know their strengths",
    sub: 'by the time they leave school',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.008m9.992-6a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '1 in 7',
    label: 'Has anxiety from school pressure',
    sub: 'a generation of self-doubt',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

const Aboutus = () => {
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
      id="about"
      ref={sectionRef}
      className="relative bg-black text-white py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-xs font-medium tracking-widest text-gray-300 uppercase">The Reality</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent leading-[1.05]"
            style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
          >
            This is what we're
            <br />
            up against.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
            India's classrooms are full. The system is fast. But somewhere along the way,
            the student became a number. We're here to change that.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mt-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/80 mb-4 group-hover:bg-white/10 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <div
                  className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Antonio, sans-serif' }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`relative w-full max-w-6xl mx-auto group transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-white/10 via-blue-500/10 to-white/10 rounded-3xl blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />

          <div className="absolute -top-3 left-6 z-20">
            <div className="px-3 py-1 rounded-full bg-red-500/90 border border-red-300/30 text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
              Watch · 2 min
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_80px_-20px_rgba(255,255,255,0.15)] bg-black">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-2xl pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-2xl pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-2xl pointer-events-none z-10" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-2xl pointer-events-none z-10" />

            <video
              controls
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover relative z-0"
              style={{ minHeight: '300px', maxHeight: '720px' }}
            >
              <source src="/assets/Problem.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-white/30" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Conatus Bharat</span>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
