"use client"
import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Aboutus = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

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
    <section id="about" className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} py-24 px-6`}>
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          This is what we’re up against.
        </h2>
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <video
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/Problem.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;