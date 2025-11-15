"use client"
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Products = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  return (
    <section className={`relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6" style={{fontFamily: 'Antonio, sans-serif'}}>
            Wonder: Adaptive Learning Platform
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            Know everything about your students. Deliver personalized learning that adapts to each child's unique needs.
          </p>
        </div>

        {/* Main Wonder Card */}
        <div className="relative">
          <Link 
            href="https://wonderclassrooms.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`group block ${isLightMode ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200' : 'bg-gradient-to-br from-gray-900 to-black border-2 border-white/10'} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Content Section */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${isLightMode ? 'bg-gray-200 text-gray-800' : 'bg-white/10 text-white border border-white/20'}`}>
                    For Schools
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Holistic Student Intelligence
                </h3>
                
                <p className={`text-lg sm:text-xl mb-8 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
                  Wonder integrates <strong className={isLightMode ? 'text-black' : 'text-white'}>everything</strong> you need to understand and support your students: cognitive assessments, learning patterns, behavioral insights, academic performance, and personalized pathways—all in one unified platform.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className={`p-4 rounded-xl ${isLightMode ? 'bg-white border border-gray-200' : 'bg-gray-900/50 border border-white/10'}`}>
                    <h4 className={`font-bold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Adaptive Learning</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      AI-powered content that adjusts to each student's pace and learning style
                    </p>
                  </div>
                  <div className={`p-4 rounded-xl ${isLightMode ? 'bg-white border border-gray-200' : 'bg-gray-900/50 border border-white/10'}`}>
                    <h4 className={`font-bold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Cognitive Assessments</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Deep insights into how students think, learn, and process information
                    </p>
                  </div>
                  <div className={`p-4 rounded-xl ${isLightMode ? 'bg-white border border-gray-200' : 'bg-gray-900/50 border border-white/10'}`}>
                    <h4 className={`font-bold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Real-Time Analytics</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Comprehensive dashboards showing student progress, strengths, and areas for growth
                    </p>
                  </div>
                  <div className={`p-4 rounded-xl ${isLightMode ? 'bg-white border border-gray-200' : 'bg-gray-900/50 border border-white/10'}`}>
                    <h4 className={`font-bold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Holistic Integration</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Seamlessly connects academic, behavioral, and cognitive data for complete student profiles
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <span className={`text-sm font-medium ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    Transform how your school understands and educates students →
                  </span>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-2/5 flex items-center justify-center p-8 lg:p-12 bg-black/50">
                <div className="relative w-full max-w-md">
                  <img
                    src="/assets/Amritansh Mishra-2 Background Removed.png"
                    alt="Wonder Platform"
                    className="w-full h-auto object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Wonder doesn't just track grades—it reveals the whole student. 
            <span className={isLightMode ? 'text-black font-semibold' : 'text-white font-semibold'}> Know everything. Support everyone.</span>
          </p>
        </div>

        {/* Buildwithwaffle Coming Soon */}
        <div className="relative mt-20">
          <div className={`group block ${isLightMode ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200' : 'bg-gradient-to-br from-gray-900 to-black border-2 border-white/10'} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-60`}>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{fontFamily: 'Antonio, sans-serif'}}>
                  Buildwithwaffle
                </h3>
                <p className={`text-lg sm:text-xl mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
                  A community to hack how students believe in themselves, learn with freedom, and launch what matters.
                </p>
                <div className="inline-block">
                  <span className={`px-6 py-3 rounded-full text-sm font-semibold ${isLightMode ? 'bg-gray-300 text-gray-700' : 'bg-white/10 text-white border border-white/20'}`}>
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;