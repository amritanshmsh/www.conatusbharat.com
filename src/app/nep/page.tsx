'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

const NepPage = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  return (
    <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NEP 2020 & Wonder</h1>
          <p className={`text-xl ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            A simple way to bring NEP's vision into everyday school life.
          </p>
        </div>

        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What NEP Actually Wants</h2>
          <p className={`text-lg mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
            NEP 2020 is India's shift from memorisation to competency, clarity, and holistic development.
            It asks schools to understand students better — how they learn, what they need, and how they grow over time.
          </p>
          <p className={`text-lg mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
            In simple terms, NEP wants:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Personalised learning',
              'Competency-based assessment',
              'Holistic progress, not just marks',
              '21st-century skills',
              'Teacher support, not overload',
              'Clear learning outcomes',
              'Early identification of strengths & needs'
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${isLightMode ? 'bg-gray-50' : 'bg-gray-900'}`}
              >
                <p className={isLightMode ? 'text-gray-700' : 'text-gray-300'}>
                  • {item}
                </p>
              </div>
            ))}
          </div>
          
          <div className={`p-6 rounded-xl ${isLightMode ? 'bg-gray-100' : 'bg-gray-900'} border-l-4 border-blue-500`}>
            <p className={`text-lg font-semibold ${isLightMode ? 'text-black' : 'text-white'}`}>
              Wonder fits directly into this vision.
            </p>
          </div>
        </div>

        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Wonder Supports NEP (Clean & Clear)</h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Whole-Student Understanding',
                content: 'NEP says: See every learner beyond marks. Wonder profiles strengths, skills, learning pace, and patterns.'
              },
              {
                title: 'Competency-Based Insight',
                content: 'Aligns student data with NCF learning outcomes and competencies.'
              },
              {
                title: 'Clarity for Teachers',
                content: 'NEP wants teachers to personalise instruction — Wonder gives them the insight to do it without extra work.'
              },
              {
                title: 'School-Level Readiness',
                content: 'Principals get a full picture of where the school stands on NEP expectations.'
              },
              {
                title: 'Holistic Growth Tracking',
                content: 'Not just academics — thinking, communication, creativity, reasoning, and MI-based strengths.'
              },
              {
                title: 'Better Parent Communication',
                content: 'Simple, NEP-style reports that help families participate in learning.'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl ${isLightMode ? 'bg-white border border-gray-200' : 'bg-gray-900 border border-gray-800'}`}
              >
                <h3 className={`text-xl font-bold mb-3 ${isLightMode ? 'text-black' : 'text-white'}`}>
                  {index + 1}. {item.title}
                </h3>
                <p className={isLightMode ? 'text-gray-700' : 'text-gray-300'}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Schools Need an NEP Layer (Not More Tools)</h2>
          <p className={`text-lg mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
            NEP does not ask for more hardware or more screens.
            It asks for understanding, clarity, and competency.
          </p>
          <p className={`text-lg mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
            Wonder becomes the intelligence layer that supports NEP without making teaching harder.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'No heavy setup',
              'No complex training',
              'No new workload',
              'Just insight → action'
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${isLightMode ? 'bg-gray-50' : 'bg-gray-900'}`}
              >
                <p className={isLightMode ? 'text-gray-700' : 'text-gray-300'}>
                  • {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Built on Govt. Frameworks</h2>
          <p className={`text-lg mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
            Wonder aligns with the frameworks that matter:
          </p>
          
          <div className="space-y-4 mb-6">
            {[
              'NEP 2020 – National Education Policy',
              'NCF 2022 / 2023 – National Curriculum Framework',
              'Competency-Based Education & Assessment Frameworks',
              'Learning Outcomes by NCERT',
              '21st Century Skills Guidelines'
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${isLightMode ? 'bg-gray-50' : 'bg-gray-900'}`}
              >
                <p className={isLightMode ? 'text-gray-700' : 'text-gray-300'}>
                  • {item}
                </p>
              </div>
            ))}
          </div>
          
          <div className={`p-6 rounded-xl ${isLightMode ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <h3 className={`text-xl font-bold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
              Links (optional for your page):
            </h3>
            <ul className={`space-y-2 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
              <li>
                <a 
                  href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  NEP 2020
                </a>
              </li>
              <li>
                <a 
                  href="https://ncert.nic.in/pdf/NCF_for_Foundational_Stage_20_October_2022.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  NCF
                </a>
              </li>
              <li>
                <a 
                  href="https://www.education.gov.in/shikshakparv/docs/Competency_based_Education_Learning_Outcomes.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  Competency Framework
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Outcome</h2>
          <p className={`text-lg mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
            With Wonder, schools can achieve NEP's goals naturally:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'More understanding',
              'Better planning',
              'Confident teachers',
              'Clearer students',
              'Stronger parent trust',
              'NEP-aligned growth'
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${isLightMode ? 'bg-gray-50' : 'bg-gray-900'}`}
              >
                <p className={isLightMode ? 'text-gray-700' : 'text-gray-300'}>
                  • {item}
                </p>
              </div>
            ))}
          </div>
          
          <div className={`p-6 rounded-xl ${isLightMode ? 'bg-gray-100' : 'bg-gray-900'} border-l-4 border-green-500`}>
            <p className={`text-lg font-semibold ${isLightMode ? 'text-black' : 'text-white'}`}>
              All without changing how classrooms work.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        {/* CTA Section */}
        <div className={`text-center p-8 rounded-2xl ${isLightMode ? 'bg-gray-100' : 'bg-gray-900'} mb-12`}>
          <h2 className="text-3xl font-bold mb-4">See how Wonder helps your school become NEP-ready — simply.</h2>
          <Link 
            href="/contact" 
            className={`inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'} shadow-lg hover:shadow-xl`}
          >
            Get a demo →
          </Link>
        </div>

        <div className="mt-12">
          <Link href="/">
            <button className={`flex items-center gap-2 ${isLightMode ? 'text-black border-black hover:bg-black hover:text-white' : 'text-white border-white hover:bg-white hover:text-black'} border px-6 py-3 rounded-lg transition-all duration-300 font-medium`}>
              <FaArrowLeft size={18} />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NepPage;