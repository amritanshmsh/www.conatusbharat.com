"use client";

import "./antonio-font.css";


import Image from "next/image";

export default function Homepage() {
  return (
  <main className="bg-white min-h-screen w-full flex flex-col justify-between">
      <section className="w-full flex flex-col items-center pt-10 pb-10 px-4">
        <div className="w-full flex flex-col items-end">
          <h1 className="w-full text-[15vw] sm:text-[11vw] font-extrabold uppercase tracking-tight text-right mb-2 opacity-0 animate-fadeIn bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent" style={{fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.06em', animationDelay: '0.1s'}}>
            CONATUS BHARAT
          </h1>
          <div className="w-full flex justify-center items-center mb-6 opacity-0 animate-fadeIn" style={{height: '220px', animationDelay: '0.3s'}}>
            <Image src="/assets/Eyes.png" alt="Eyes" width={1100} height={220} className="object-cover w-full h-full filter grayscale hover:filter-none transition-all duration-700" />
          </div>
          <div className="w-full flex flex-row items-start justify-between">
            <div className="max-w-2xl text-lg sm:text-xl text-left leading-relaxed mb-4 opacity-0 animate-fadeIn bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent" style={{animationDelay: '0.5s'}}>
              Conatus Bharat is where <span className="font-bold">curiosity meets community</span>. We don’t just build tools, but nurture human stories. We harness what happens in moments of quiet discovery and connection.<br /><br />
              A place for <span className="font-bold">makers</span> and <span className="font-bold">dreamers</span> alike—honored, and becoming your best self, unfolding every day.
            </div>
            <div className="font-extrabold text-[15vw] sm:text-[11vw] pl-8 opacity-0 animate-fadeIn bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent" style={{fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.06em', animationDelay: '0.7s'}}>
              26
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
        
