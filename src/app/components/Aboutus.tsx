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
    <section id="about" className="bg-black text-white py-32 px-4 sm:px-6 md:px-8 lg:px-12 animate-fadein relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent whitespace-normal break-words tracking-tight" style={{fontFamily: 'Antonio, sans-serif', wordBreak: 'break-word', lineHeight: '1.1'}}>
            This is what we're up against.
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>
        
        <div className="relative w-full max-w-6xl group">
          <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.1),0_0_100px_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.15),0_0_120px_rgba(255,255,255,0.08)] bg-black">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
            
            <video
              controls
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover relative z-10"
              style={{ minHeight: '400px', maxHeight: '800px' }}
            >
              <source src="/assets/Problem.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Bottom accent line */}
          <div className="mt-8 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
        </div>
      </div>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default Aboutus;