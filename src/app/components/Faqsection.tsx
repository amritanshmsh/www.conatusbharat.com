'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <div className="relative z-[50] w-full bg-[#0B0F24] py-14 px-6 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">
        Frequently Asked <span className="text-white">Questions</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-5">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            ref={(el) => (faqRefs.current[index] = el)}
            className="faq-item p-5 md:p-6 rounded-xl bg-[#11182B] shadow-lg border border-[#202B44] transition-all duration-300 hover:bg-[#1A233B]"
          >
            <button 
              onClick={() => toggleFaq(index)} 
              className="w-full text-left flex justify-between items-center font-semibold text-base md:text-lg text-white transition-colors duration-300"
            >
              {faq.question}
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                ➜
              </span>
            </button>
            <div className="faq-content overflow-hidden mt-2 text-gray-400 h-0 opacity-0">
              <p className="pt-2 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
