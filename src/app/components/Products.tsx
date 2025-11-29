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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6" style={{fontFamily: 'Antonio, sans-serif'}}>
            Wonder: Adaptive Learning Platform
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            Wonder is our learning-intelligence platform built to help schools see every student—how they learn, what they need, and where they're headed.
            <br /><br />
            A simple, NEP-aligned system that gives teachers clarity, reduces workload, and helps students grow with confidence.
          </p>
          <div className="mt-8">
            <Link 
              href="https://wonderclassrooms.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'} shadow-lg hover:shadow-xl`}
            >
              Explore Wonder
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative">
          <Link 
            href="https://www.wonderclassrooms.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`group block ${isLightMode ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200' : 'bg-gradient-to-br from-gray-900 to-black border-2 border-white/10'} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${isLightMode ? 'bg-gray-200 text-gray-800' : 'bg-white/10 text-white border border-white/20'}`}>
                    For Schools
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Learning Intelligence for Every Student
                </h3>
                
                <p className={`text-lg sm:text-xl mb-8 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
                  Wonder goes beyond traditional assessments to provide deep insights into how each student learns, thinks, and grows. Our platform combines cognitive science, adaptive technology, and educational expertise to create a complete picture of every learner.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${isLightMode ? 'bg-white border border-gray-200 hover:border-gray-300' : 'bg-gray-900/50 border border-white/10 hover:border-white/20'}`}>
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h4 className={`font-bold text-xl mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Teacher Clarity</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Gain clear insights into each student's learning patterns, strengths, and areas for growth
                    </p>
                  </div>
                  <div className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${isLightMode ? 'bg-white border border-gray-200 hover:border-gray-300' : 'bg-gray-900/50 border border-white/10 hover:border-white/20'}`}>
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className={`font-bold text-xl mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Reduced Workload</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Automate assessments, insights, and personalized learning paths to save valuable time
                    </p>
                  </div>
                  <div className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${isLightMode ? 'bg-white border border-gray-200 hover:border-gray-300' : 'bg-gray-900/50 border border-white/10 hover:border-white/20'}`}>
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className={`font-bold text-xl mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Student Confidence</h4>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Personalized learning paths that adapt to each student's pace and style build confidence
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link 
                    href="https://wonderclassrooms.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'} shadow-md hover:shadow-lg`}
                  >
                    Discover Wonder
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>

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

        <div className="text-center max-w-3xl mx-auto">
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Wonder doesn't just track academic performance—it reveals the whole student through deep learning intelligence. 
            <span className={isLightMode ? 'text-black font-semibold' : 'text-white font-semibold'}> Know everything. Support everyone.</span>
          </p>
        </div>

        <div className="relative mt-20">
          <div className={`group block ${isLightMode ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200' : 'bg-gradient-to-br from-gray-900 to-black border-2 border-white/10'} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-60`}>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{fontFamily: 'Antonio, sans-serif'}}>
                  School OS
                </h3>
                <p className={`text-lg sm:text-xl mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
                  A platform for schools, students, and parents to showcase learning journeys, achievements, and growth in one unified digital ecosystem.
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