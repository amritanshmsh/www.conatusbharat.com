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
    answer: "Unlike traditional apps that teach the same way to everyone, Wonder goes deep, not broad, offering personalized education, skill analysis, and personality insights for each student.",
  },
  {
    question: "How does Wonder help students discover their strengths?",
    answer: "Wonder studies how students learn, behave, and perform across subjects and skills. It creates a Student Identity Profile that highlights strengths, weaknesses, skills, and recommended learning paths.",
  },
  {
    question: "What is the mission of Conatus Bharat Education Pvt Ltd?",
    answer: "Our mission is simple:<br /><br />To ensure every student knows who they are — and to help them work towards it.",
  },
  {
    question: "Why was Conatus Bharat created?",
    answer: "Because most students don't know their strengths or what to explore. Conatus Bharat was built to solve the root cause — helping students fall in love with learning by understanding themselves, not by forcing one-size-fits-all education.",
  },
];

const FaqSection: React.FC = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.utils.toArray('.faq-item').forEach((item: any) => {
      gsap.fromTo(item, { opacity: 0, y: 20 }, {
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
      });
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
    <section id="faq" className={`relative z-[50] w-full ${isLightMode ? 'bg-white' : 'bg-black'} py-10 px-4 md:px-10 lg:px-16`}>
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 max-w-4xl mx-auto px-4 md:px-10 lg:px-20 text-left">
        <span className={isLightMode ? 'text-gray-500' : 'text-gray-300'}>Frequently Asked </span>
        <span className={isLightMode ? 'text-black' : 'text-white'}>Questions</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-5 px-4 md:px-10 lg:px-20">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            ref={el => {
              faqRefs.current[index] = el;
            }}
            className={`faq-item p-3 md:p-4 rounded-xl ${isLightMode ? 'bg-gray-100 hover:bg-gray-200 border-gray-300' : 'bg-[#0c0c0c] hover:bg-[#1a1a1a] border-[#2a2a2a]'} shadow-sm border border-[0.2px] transition-all duration-300`}
          >
            <button 
              onClick={() => toggleFaq(index)} 
              className={`w-full text-left flex justify-between items-center font-medium text-sm md:text-base ${isLightMode ? 'text-gray-800' : 'text-white'} transition-colors duration-300`}
            >
              {faq.question}
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                ➜
              </span>
            </button>
            <div className="faq-content overflow-hidden mt-2 h-0 opacity-0">
              <p 
                className={`pt-2 text-xs md:text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`} 
                dangerouslySetInnerHTML={{ 
                  __html: faq.answer.replace(
                    /class='underline'/g, 
                    `class='underline ${isLightMode ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'}'`
                  )
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
