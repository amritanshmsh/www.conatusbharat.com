'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is Wonder?",
    answer: "Wonder is a holistic learning platform that helps every student understand who they truly are — their strengths, skills, interests, and learning style — using adaptive learning and AI analysis.",
  },
  {
    question: "How is Wonder different from other learning apps?",
    answer: "Unlike traditional apps that teach the same way to everyone, Wonder goes deep, not broad — offering personalised education, skill analysis, and personality insights for each student.",
  },
  {
    question: "How does Wonder help students discover their strengths?",
    answer: "Wonder studies how students learn, behave, and perform across subjects and skills. It creates a Student Identity Profile that highlights strengths, weaknesses, skills, and recommended learning paths.",
  },
  {
    question: "What is the mission of Conatus Bharat?",
    answer: "Our mission is simple: to ensure every student knows who they are — and to help them work towards it.",
  },
  {
    question: "Why was Conatus Bharat created?",
    answer: "Because most students don't know their strengths or what to explore. Conatus Bharat was built to solve the root cause — helping students fall in love with learning by understanding themselves, not by forcing one-size-fits-all education.",
  },
];

const FaqSection: React.FC = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.utils.toArray('.faq-item').forEach((item: any) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.2,
          },
        }
      );
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    faqRefs.current.forEach((faq, index) => {
      if (faq) {
        const content = faq.querySelector('.faq-content') as HTMLDivElement;
        if (index === openIndex) {
          gsap.to(content, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
        } else {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }
      }
    });
  }, [openIndex]);

  return (
    <section
      id="faq"
      className={`relative z-[50] w-full py-24 md:py-32 px-4 md:px-10 lg:px-16 overflow-hidden ${
        isLightMode ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-black to-[#070707]'
      }`}
    >
      <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${isLightMode ? 'bg-blue-100/40' : 'bg-blue-500/5'}`} />
      <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl ${isLightMode ? 'bg-purple-100/40' : 'bg-purple-500/5'}`} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border ${isLightMode ? 'bg-black/[0.03] border-black/10' : 'bg-white/5 border-white/10'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3.5 h-3.5 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.008m9.992-6a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-xs font-medium tracking-widest uppercase ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>FAQ</span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-[1.05] bg-clip-text text-transparent ${
              isLightMode ? 'bg-gradient-to-b from-black to-gray-600' : 'bg-gradient-to-b from-white to-gray-500'
            }`}
            style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
          >
            Questions, answered.
          </h2>
          <p className={`text-base sm:text-lg max-w-xl mx-auto ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Everything you might want to know about Wonder and Conatus Bharat.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                ref={(el) => {
                  faqRefs.current[index] = el;
                }}
                className={`faq-item rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isLightMode
                      ? 'bg-white border-black/40 shadow-lg shadow-black/5'
                      : 'bg-white/[0.04] border-white/30 shadow-2xl'
                    : isLightMode
                    ? 'bg-white border-gray-200 hover:border-gray-300'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center gap-4 p-5 sm:p-6"
                >
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                      isOpen
                        ? isLightMode
                          ? 'bg-black text-white'
                          : 'bg-white text-black'
                        : isLightMode
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-white/5 text-gray-400'
                    }`}
                    style={{ fontFamily: 'Antonio, sans-serif' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className={`flex-1 font-semibold text-base sm:text-lg ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                    {faq.question}
                  </span>

                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    } ${
                      isLightMode ? 'bg-gray-100 text-gray-700' : 'bg-white/5 text-gray-300'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <div className="faq-content overflow-hidden h-0 opacity-0">
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.5rem] sm:pl-[4.75rem]">
                    <div className={`h-px w-full mb-4 ${isLightMode ? 'bg-gray-200' : 'bg-white/10'}`} />
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-14 p-8 rounded-2xl border text-center ${
          isLightMode
            ? 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
            : 'bg-gradient-to-br from-white/[0.04] to-transparent border-white/10'
        }`}>
          <p className={`text-base sm:text-lg mb-5 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            Still have a question? We're happy to talk.
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
              isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Get in touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
