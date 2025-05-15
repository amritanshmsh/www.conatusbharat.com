import React, { useRef, useEffect } from 'react';

const Aboutus = () => {
  const firstRef = useRef<HTMLParagraphElement>(null);
  const secondRef = useRef<HTMLParagraphElement>(null);
  const thirdRef = useRef<HTMLParagraphElement>(null);
  const fourthRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      firstRef.current,
      secondRef.current,
      thirdRef.current,
      fourthRef.current,
    ];

    let index = 0;

    const interval = setInterval(() => {
      elements.forEach((el, i) => {
        if (el) {
          el.style.opacity = i === index ? '1' : '0.2';
        }
      });
      index = (index + 1) % elements.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <p ref={firstRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>We are not a coaching center</p>
          <p ref={secondRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>We are not about traditional careers</p>
          <p ref={thirdRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>Conatus is an institution to help you reach your full potential</p>
          <p ref={fourthRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>Conatus is your first believer</p>
        </div>
      </div>
      {/* Background decorative elements remain unchanged */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-1/2 transform -translate-x-1/2" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content */}
        </svg>
      </div>
    </section>
  );
};

export default Aboutus;