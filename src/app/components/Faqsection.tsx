'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is Conatus Bharat really about?",
    answer: "Conatus Bharat is a movement to transform education — to help children discover who they are, not just what they can memorize. We build tools that adapt to learners, not the other way around.",
  },
  {
    question: "Why are you doing this?",
    answer: "Because we’ve all seen how outdated the system is. And we believe children deserve more — more curiosity, more creativity, more choice. Conatus is our way of rebuilding education from the inside out.",
  },
  {
    question: "What makes you different from other EdTech startups?",
    answer: "We're not chasing the next app download. We care about long-term transformation — by integrating psychometrics, adaptive learning, and school support, all under one roof.",
  },
  {
    question: "What is Wonder?",
    answer: "Wonder is our flagship platform — an adaptive assessment system that maps how a child thinks, learns, and grows. Visit <a href='https://iamwonder.in' class='text-white underline' target='_blank' rel='noopener noreferrer'>iamwonder.in</a> to explore.",
  },
  {
    question: "How do you help schools today?",
    answer: "We offer everything from learning systems to smart ERP to school storytelling through social media — all built to support the next generation of learners and educators.",
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
      <h2 className="text-3xl sm:text-4xl font-semibold text-left mb-10">
        <span className={isLightMode ? 'text-gray-500' : 'text-gray-300'}>Frequently Asked </span>
        <span className={isLightMode ? 'text-black' : 'text-white'}>Questions</span>
      </h2>
      <div className="max-w-2xl space-y-5 pl-1">
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
              <p className={`pt-2 text-xs md:text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`} dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
