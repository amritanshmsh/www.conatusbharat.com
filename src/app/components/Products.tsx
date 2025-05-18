"use client"
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';


const Products = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  return (
    <section className={`relative overflow-hidden py-16 px-6 md:px-20 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className="relative z-10 max-w-7xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center px-0">What We’re Building</h2>
        <p className={`text-center max-w-2xl mx-auto mb-8 text-sm sm:text-base ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
          Conatus Bharat is not a company with products. It’s a movement equipped with tools —
          to reimagine learning, rebuild schools, and help every child discover who they truly are.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Wonder Card - 65% */}
          <Link href="https://iamwonder.in" target="_blank" rel="noopener noreferrer" className={`relative min-h-[16rem] sm:min-h-auto flex-1 basis-2/3 ${isLightMode ? 'bg-[#f5f5f5] border-gray-200 text-black' : 'bg-black border border-white/10 text-white'} rounded-2xl overflow-visible flex group hover:scale-105 transition-transform`}>
            <div className="p-4 sm:p-8 pr-40 sm:pr-12 flex flex-col justify-start flex-1">
              <div>
                <h3 className="text-2xl sm:text-4xl sm:pr-0 font-extrabold mb-2 p">Wonder: Adaptive Learning</h3>
                <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mb-3 text-xs sm:text-sm pr-30`}>
                  Wonder is an AI-powered learning platform that adapts to each student’s pace and behavior. It delivers personalized content, real-time feedback, and cognitive assessments 
                  ensuring every learner thrives through a dynamic experience.
                </p>
              </div>
            </div>
            <div className="w-1/3 hidden sm:flex items-end justify-end aspect-square">
              <img
                src="/assets/Amritansh Mishra-2 Background Removed.png"
                alt="Wonder"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="sm:hidden absolute bottom-0 right-0 w-40 h-40 overflow-visible">
              <img
                src="/assets/Amritansh Mishra-2 Background Removed.png"
                alt="Wonder"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </Link>

          {/* Lumen Card - 35% */}
          <Link href="/lumen" className={`basis-1/3 ${isLightMode ? 'bg-[#f5f5f5] border-gray-200 text-black' : 'bg-black border border-white/10 text-white'} rounded-2xl p-4 sm:p-8 flex flex-col items-center text-center justify-between group hover:scale-105 transition-transform`}>
            <img src="/assets/original-5fa1b76c0e64a7ad334ffb3b38ca7158.png" alt="Lumen Hub" className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-yellow-300" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Lumen Hub</h3>
            <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mb-4`}>Comprehensive School ERP: Attendance, Fees, Transport & Academics.</p>
            <span className="px-4 py-1 text-xs font-medium text-black bg-yellow-300 rounded-full">Coming Soon</span>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Waffle: Hack Club - 35% */}
          <Link
            href="/waffle"
            className={`basis-1/3 ${isLightMode ? 'bg-[#f5f5f5] border-gray-200 text-black' : 'bg-black border border-white/10 text-white'} rounded-2xl overflow-hidden flex group hover:scale-105 transition-transform`}
          >
            <div className="flex-1 flex flex-col justify-between p-4 sm:p-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Waffle: Hack Club</h3>
                <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mb-6`}>
                  A community to hack how students believe in themselves, learn with freedom, and launch what matters.
                </p>
              </div>
            </div>
          </Link>

          {/* Social Media Marketing - 65% */}
          <Link href="https://elevenmedia.agency" target="_blank" rel="noopener noreferrer" className={`flex-1 basis-2/3 ${isLightMode ? 'bg-[#f5f5f5] border-gray-200 text-black' : 'bg-black border border-white/10 text-white'} rounded-2xl overflow-hidden flex group hover:scale-105 transition-transform`}>
            <div className="flex-1 flex flex-col justify-between p-4 sm:p-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Social Media Marketing</h3>
                <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} mb-3`}>
                  Boost your school's digital presence with targeted campaigns, engaging content, and strategic outreach on leading social media platforms—all managed by our expert team.
                </p>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center overflow-visible">
              <img
                src="/assets/original-f580122a5cde3e077ace1aac5ea5335f Background Removed.png"
                alt="Social Media"
                className="h-48 sm:h-72 w-full object-cover"
                style={{ objectPosition: '25% 0' }}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;