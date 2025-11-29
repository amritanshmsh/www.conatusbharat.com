"use client"
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import "../components/antonio-font.css";

export default function StoryPage() {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  return (
    <section className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden`}>
      <div className={`absolute inset-0 opacity-[0.015] ${isLightMode ? 'bg-black' : 'bg-white'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,currentColor_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className={`w-24 h-[1px] ${isLightMode ? 'bg-gray-400' : 'bg-gray-500'}`}></div>
            <h1 
              className="text-[clamp(3rem,12vw,8rem)] sm:text-[clamp(4rem,10vw,7rem)] font-extrabold uppercase tracking-tight leading-[0.9]"
              style={{
                fontFamily: 'Antonio, sans-serif', 
                letterSpacing: '-0.06em'
              }}
            >
              &ldquo;OWN TOMORROW&rdquo;
            </h1>
          </div>
          
          <div className={`max-w-3xl space-y-5 text-lg md:text-xl leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            <p>
              Tomorrow belongs to those who understand themselves. To those who embrace who they are. To those who choose the path that matches their strengths.
            </p>
            <p>
              That is why Conatus Bharat exists: to help every student, every school, and every learning journey—own tomorrow.
            </p>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            <p>
              The story of Conatus Bharat is the story of <span className={`${isLightMode ? 'text-black' : 'text-white'} font-medium`}>countless children</span> who were guided into traditional careers—not because they weren't capable of more, but because no one helped them understand their unique gifts, strengths, and passions.
            </p>
            
            <p>
              For years, students have been measured by a narrow definition of success.
            </p>
          </div>
          
          <div className={`${isLightMode ? 'bg-gray-50/80 border-gray-200' : 'bg-gray-900/40 border-white/10'} border rounded-3xl p-8 md:p-10 space-y-5 backdrop-blur-sm`}>
            <div className={`space-y-4 pl-6 border-l-2 ${isLightMode ? 'border-gray-400' : 'border-white/30'}`}>
              <p className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>If they struggled in math, they were considered weak.</p>
              <p className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>If they excelled in creativity, it was labeled a hobby.</p>
              <p className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>If they explored beyond the syllabus, it was discouraged.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className={`text-xl md:text-2xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'} font-medium`}>
              But the truth is simple:
            </p>
            
            <div className={`${isLightMode ? 'bg-gradient-to-br from-gray-50 to-white border-gray-200' : 'bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10'} border-2 rounded-3xl p-10 md:p-12 shadow-lg`}>
              <p className={`${isLightMode ? 'text-black' : 'text-white'} text-2xl md:text-3xl lg:text-4xl font-normal leading-tight`}>
                &ldquo;Every child is gifted—just not in the same way.&rdquo;
              </p>
            </div>
          </div>
          
          <div className={`space-y-8 text-lg md:text-xl leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            <p>
              Conatus Bharat was built to change this reality.
            </p>
            
            <p>
              We believe that <span className={`${isLightMode ? 'text-black' : 'text-white'} font-medium`}>&ldquo;talent needs direction, not conformity&rdquo;</span>, and that children deserve an education that adapts to them—not the other way around.
            </p>
            
            <p>
              This belief sparked the creation of Conatus Bharat—an ecosystem designed to help children:
            </p>
            
            <div className={`${isLightMode ? 'bg-gray-50/80 border-gray-200' : 'bg-gray-900/40 border-white/10'} border rounded-3xl p-8 md:p-10 backdrop-blur-sm`}>
              <ul className="space-y-5 pl-6 list-disc list-outside">
                <li className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>Discover who they truly are</li>
                <li className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>Understand their natural abilities</li>
                <li className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>Explore unconventional paths</li>
                <li className={`text-lg md:text-xl ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>Become exceptional in what they're inclined toward</li>
              </ul>
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              We empower students and schools to break free from rigid, outdated systems and truly transform education.
            </p>
          </div>
        </div>

        <div className={`${isLightMode ? 'border-gray-200' : 'border-gray-700'} border-b w-full`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className={`${isLightMode ? 'bg-gradient-to-br from-gray-50 to-white border-gray-200' : 'bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10'} border-2 rounded-3xl p-8 md:p-10 space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <h2 
              className="text-2xl md:text-3xl font-semibold"
              style={{fontFamily: 'Antonio, sans-serif', fontWeight: 500}}
            >
              For Students
            </h2>
            
            <div className="space-y-4">
              <h3 className={`text-lg md:text-xl font-medium ${isLightMode ? 'text-black' : 'text-white'}`}>
                Discover Who You Are
              </h3>
              
              <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'} text-base md:text-lg leading-relaxed`}>
                Every child carries unique potential. Through personalized insights and adaptive learning, we help children recognize their abilities and shape their own extraordinary futures.
              </p>
            </div>
          </div>

          <div className={`${isLightMode ? 'bg-gradient-to-br from-gray-50 to-white border-gray-200' : 'bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10'} border-2 rounded-3xl p-8 md:p-10 space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <h2 
              className="text-2xl md:text-3xl font-semibold"
              style={{fontFamily: 'Antonio, sans-serif', fontWeight: 500}}
            >
              For Schools
            </h2>
            
            <div className="space-y-4">
              <h3 className={`text-lg md:text-xl font-medium ${isLightMode ? 'text-black' : 'text-white'}`}>
                Build Future-Ready Learning Ecosystems
              </h3>
              
              <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'} text-base md:text-lg leading-relaxed`}>
                We partner with schools to create learning environments that recognize diverse talents, encourage personalized pathways, and prepare students not just for exams—but for life.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-16">
          <Link href="/">
            <button className={`flex items-center gap-2 ${isLightMode ? 'text-black border-black hover:bg-black hover:text-white' : 'text-white border-white hover:bg-white hover:text-black'} border px-6 py-3 rounded-lg transition-all duration-300 font-medium`}>
              <FaArrowLeft size={18} />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}