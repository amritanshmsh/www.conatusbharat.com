'use client'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function FinalSection() {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-28 md:py-36 px-4 sm:px-6 overflow-hidden ${
        isLightMode ? 'bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800' : 'bg-gradient-to-b from-black via-[#080808] to-black text-white'
      }`}
    >
      <div className={`absolute inset-0 ${isLightMode ? 'bg-[radial-gradient(#0000000c_1px,transparent_1px)]' : 'bg-[radial-gradient(#ffffff0c_1px,transparent_1px)]'} [background-size:32px_32px] pointer-events-none z-0`} />

      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none ${isLightMode ? 'bg-blue-200/30' : 'bg-blue-500/10'}`} />

      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-8 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className={`relative rounded-[2rem] overflow-hidden border ${
          isLightMode
            ? 'bg-white border-gray-200 shadow-xl shadow-black/5'
            : 'bg-gradient-to-br from-white/[0.05] to-white/[0.01] border-white/10 backdrop-blur-sm'
        }`}>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-amber-500/20 to-pink-500/20 blur-3xl" />

          <div className="relative p-10 md:p-16 lg:p-20 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border ${isLightMode ? 'bg-black/[0.03] border-black/10' : 'bg-white/5 border-white/10'}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLightMode ? 'bg-blue-400' : 'bg-blue-300'}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isLightMode ? 'bg-blue-500' : 'bg-blue-400'}`} />
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                Just the Beginning
              </span>
            </div>

            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] bg-clip-text text-transparent ${
                isLightMode ? 'bg-gradient-to-b from-black to-gray-600' : 'bg-gradient-to-b from-white to-gray-400'
              }`}
              style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
            >
              Build the future of
              <br />
              learning with us.
            </h2>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>
              Conatus Bharat is more than a launch — it's a promise. To rethink what learning means.
              To build tools that truly serve children. And to partner with those who dare to believe in better.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className={`group inline-flex items-center px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  isLightMode ? 'bg-black text-white hover:bg-gray-900' : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                Bring Conatus to your school
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="https://wonderclassrooms.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold border transition-all duration-300 hover:scale-105 ${
                  isLightMode ? 'border-gray-300 text-gray-800 hover:border-black hover:bg-black/[0.03]' : 'border-white/20 text-white hover:border-white/40 hover:bg-white/[0.04]'
                }`}
              >
                Explore Wonder
              </Link>
            </div>

            <div className={`pt-10 border-t ${isLightMode ? 'border-gray-200' : 'border-white/10'} grid grid-cols-3 gap-4 max-w-2xl mx-auto`}>
              {[
                { value: 'NEP', label: 'Aligned' },
                { value: '24/7', label: 'Support' },
                { value: 'India', label: 'Built for' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold mb-1 ${isLightMode ? 'text-black' : 'text-white'}`}
                    style={{ fontFamily: 'Antonio, sans-serif' }}
                  >
                    {s.value}
                  </div>
                  <div className={`text-[10px] sm:text-xs tracking-widest uppercase ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 w-full h-px ${isLightMode ? 'bg-gray-300' : 'bg-white/10'}`} />
    </section>
  );
}
