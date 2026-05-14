"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Products = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const cardSurface = isLightMode
    ? 'bg-white border border-gray-200 hover:border-gray-300'
    : 'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30';

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 ${
        isLightMode ? 'bg-gradient-to-b from-white to-gray-50 text-black' : 'bg-gradient-to-b from-black via-[#080808] to-black text-white'
      }`}
    >
      <div
        className={`absolute inset-0 opacity-[0.04] pointer-events-none ${
          isLightMode ? '[--dot:#000]' : '[--dot:#fff]'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--dot)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>
      <div className={`absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-3xl ${isLightMode ? 'bg-blue-200/30' : 'bg-blue-500/10'}`} />
      <div className={`absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-3xl ${isLightMode ? 'bg-purple-200/30' : 'bg-purple-500/10'}`} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border ${isLightMode ? 'bg-black/[0.03] border-black/10' : 'bg-white/5 border-white/10'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLightMode ? 'bg-black' : 'bg-white'}`} />
            <span className={`text-xs font-medium tracking-widest uppercase ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>What We Build</span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] bg-clip-text text-transparent ${
              isLightMode
                ? 'bg-gradient-to-b from-black to-gray-600'
                : 'bg-gradient-to-b from-white to-gray-500'
            }`}
            style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
          >
            Products that actually
            <br />
            see the student.
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Everything we build starts from one belief — every learner is unique.
            Our tools help schools see them clearly and serve them well.
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`absolute -inset-4 rounded-[2rem] blur-2xl opacity-30 ${isLightMode ? 'bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200' : 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20'}`} />

          <Link
            href="https://www.wonderclassrooms.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl ${
              isLightMode
                ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300'
                : 'bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase ${isLightMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live Now
                  </span>
                  <span className={`text-[11px] font-semibold tracking-widest uppercase ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>For Schools</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight"
                  style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
                >
                  Wonder
                </h3>
                <p className={`text-lg font-medium mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                  Learning Intelligence for Every Student
                </p>

                <p className={`text-base sm:text-lg mb-10 leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                  Wonder goes beyond traditional assessments to reveal how each student thinks,
                  learns, and grows — combining cognitive science with adaptive technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {[
                    {
                      title: 'Teacher Clarity',
                      desc: 'Clear insight into every student’s learning patterns',
                      color: isLightMode ? 'text-blue-600' : 'text-blue-400',
                      bg: isLightMode ? 'bg-blue-50' : 'bg-blue-500/10',
                      border: isLightMode ? 'border-blue-100' : 'border-blue-500/20',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Less Workload',
                      desc: 'Automated reports, insights, and adaptive paths',
                      color: isLightMode ? 'text-purple-600' : 'text-purple-400',
                      bg: isLightMode ? 'bg-purple-50' : 'bg-purple-500/10',
                      border: isLightMode ? 'border-purple-100' : 'border-purple-500/20',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Confident Students',
                      desc: 'Personalised paths that build belief, not pressure',
                      color: isLightMode ? 'text-emerald-600' : 'text-emerald-400',
                      bg: isLightMode ? 'bg-emerald-50' : 'bg-emerald-500/10',
                      border: isLightMode ? 'border-emerald-100' : 'border-emerald-500/20',
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      ),
                    },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className={`p-5 rounded-2xl transition-all duration-300 ${cardSurface}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${f.bg} ${f.border} ${f.color}`}>
                        {f.icon}
                      </div>
                      <h4 className={`font-bold text-base mb-1 ${isLightMode ? 'text-black' : 'text-white'}`}>
                        {f.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-500'}`}>
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isLightMode ? 'bg-black text-white group-hover:bg-gray-800' : 'bg-white text-black group-hover:bg-gray-200'
                    } shadow-md group-hover:shadow-lg group-hover:scale-105`}
                  >
                    Discover Wonder
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className={`text-xs ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    wonderclassrooms.com
                  </span>
                </div>
              </div>

              <div className={`lg:w-[42%] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden ${isLightMode ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-gradient-to-br from-black to-[#0d0d0d]'}`}>
                <div className="absolute inset-0 opacity-30">
                  <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isLightMode ? '#0001' : '#fff1'}_1px,transparent_1px),linear-gradient(to_bottom,${isLightMode ? '#0001' : '#fff1'}_1px,transparent_1px)] bg-[size:24px_24px]`} />
                </div>

                <div className="relative w-full max-w-sm">
                  <div className={`absolute -inset-4 rounded-3xl blur-2xl ${isLightMode ? 'bg-blue-200/40' : 'bg-blue-500/20'}`} />

                  <div className={`relative rounded-2xl border overflow-hidden shadow-2xl ${isLightMode ? 'bg-white border-gray-200' : 'bg-[#0a0a0a] border-white/10'}`}>
                    <div className={`flex items-center gap-1.5 px-4 py-3 border-b ${isLightMode ? 'border-gray-200 bg-gray-50' : 'border-white/10 bg-white/[0.02]'}`}>
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className={`ml-3 text-[10px] font-mono ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>wonder · student profile</span>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${isLightMode ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-gradient-to-br from-blue-400 to-purple-400 text-white'}`}>
                          A
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-bold ${isLightMode ? 'text-black' : 'text-white'}`}>Aanya, Grade 8</div>
                          <div className={`text-[11px] ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>Visual learner · Curiosity high</div>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          { label: 'Reasoning', value: 86, color: 'from-blue-400 to-blue-500' },
                          { label: 'Creativity', value: 92, color: 'from-purple-400 to-purple-500' },
                          { label: 'Focus', value: 71, color: 'from-emerald-400 to-emerald-500' },
                        ].map((m) => (
                          <div key={m.label}>
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-[11px] font-medium ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>{m.label}</span>
                              <span className={`text-[11px] font-bold ${isLightMode ? 'text-gray-900' : 'text-white'}`}>{m.value}%</span>
                            </div>
                            <div className={`h-1.5 rounded-full overflow-hidden ${isLightMode ? 'bg-gray-100' : 'bg-white/5'}`}>
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${m.color} transition-all duration-1000`}
                                style={{ width: visible ? `${m.value}%` : '0%' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={`pt-3 border-t flex items-center justify-between ${isLightMode ? 'border-gray-200' : 'border-white/10'}`}>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className={`text-[11px] ${isLightMode ? 'text-gray-600' : 'text-gray-500'}`}>Adaptive path active</span>
                        </div>
                        <span className={`text-[10px] font-bold ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>NEP-aligned</span>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute -bottom-4 -right-4 px-3 py-2 rounded-xl border shadow-lg ${isLightMode ? 'bg-white border-gray-200' : 'bg-[#111] border-white/10'} flex items-center gap-2`}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`text-[10px] ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>Today’s win</div>
                      <div className={`text-[11px] font-bold ${isLightMode ? 'text-black' : 'text-white'}`}>+12% growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-16 mb-20">
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Wonder doesn't just track academic performance — it reveals the whole student.
            <span className={`${isLightMode ? 'text-black' : 'text-white'} font-semibold`}> Know everything. Support everyone.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'School OS',
              desc: 'A unified ecosystem for schools, students, and parents to showcase learning journeys, achievements, and growth.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              ),
            },
            {
              title: 'Build with Waffle',
              desc: 'A community where students hack how they believe in themselves, learn with freedom, and launch what matters.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              ),
            },
          ].map((p) => (
            <div
              key={p.title}
              className={`group relative rounded-3xl overflow-hidden p-8 md:p-10 transition-all duration-500 hover:scale-[1.01] ${
                isLightMode
                  ? 'bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200'
                  : 'bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-white/20'
              }`}
            >
              <div className="absolute top-6 right-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${isLightMode ? 'bg-amber-100 text-amber-700' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                  <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                  Coming Soon
                </span>
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isLightMode ? 'bg-black text-white' : 'bg-white/5 text-white border border-white/10'}`}>
                {p.icon}
              </div>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3"
                style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
              >
                {p.title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed max-w-md ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                {p.desc}
              </p>

              <div className={`mt-8 inline-flex items-center text-sm font-medium ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Notify me
                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
