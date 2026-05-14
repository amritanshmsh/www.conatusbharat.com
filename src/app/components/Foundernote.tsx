"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const Foundernote = () => {
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
      className={`relative overflow-hidden py-28 md:py-36 px-4 sm:px-6 ${
        isLightMode ? 'bg-gradient-to-b from-white via-gray-50 to-white text-gray-900' : 'bg-gradient-to-b from-[#070707] via-black to-[#070707] text-white'
      }`}
    >
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none opacity-30 ${isLightMode ? 'bg-amber-100' : 'bg-amber-500/5'}`} />

      <div className={`absolute inset-0 opacity-[0.035] pointer-events-none ${isLightMode ? '[--g:#000]' : '[--g:#fff]'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--g)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 border ${isLightMode ? 'bg-black/[0.03] border-black/10' : 'bg-white/5 border-white/10'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLightMode ? 'bg-black' : 'bg-white'}`} />
            <span className={`text-xs font-medium tracking-widest uppercase ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
              From the Founder
            </span>
          </div>

          <div className="relative mb-10">
            <div className={`absolute -inset-3 rounded-full blur-xl ${isLightMode ? 'bg-amber-200/40' : 'bg-amber-400/10'}`} />
            <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 ${isLightMode ? 'border-black/10' : 'border-white/20'} shadow-2xl`}>
              <img
                src="/assets/founder.jpg"
                alt="Dr. Preeti Mishra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <svg
            className={`w-12 h-12 mb-6 opacity-30 ${isLightMode ? 'text-black' : 'text-white'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C18.553 16.227 18 15 18 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" transform="translate(-4 0)" />
          </svg>

          <blockquote
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] max-w-4xl mb-10 ${isLightMode ? 'text-gray-900' : 'text-white'}`}
            style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.01em' }}
          >
            "Race ko choro, give{' '}
            <span className={`italic font-extrabold ${isLightMode ? 'text-amber-700' : 'text-amber-300'}`}>
              dreams
            </span>{' '}
            their own{' '}
            <span className={`italic font-extrabold ${isLightMode ? 'text-amber-700' : 'text-amber-300'}`}>
              sky
            </span>{' '}
            — woh wahin{' '}
            <span className={`italic font-extrabold ${isLightMode ? 'text-amber-700' : 'text-amber-300'}`}>
              belong
            </span>{' '}
            karte hain."
          </blockquote>

          <div className="flex flex-col items-center gap-1">
            <div className={`w-12 h-px ${isLightMode ? 'bg-gray-400' : 'bg-gray-600'} mb-4`} />
            <p className={`text-base font-semibold ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
              Dr. Preeti Mishra
            </p>
            <p className={`text-xs tracking-widest uppercase ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Founder · Conatus Bharat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundernote;
