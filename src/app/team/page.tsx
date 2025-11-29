'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaArrowLeft, FaLinkedin } from 'react-icons/fa';
import mentorsData from '@/app/data/mentors.json';

const TeamPage = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  const directors = [
    {
      name: "Amritansh Mishra",
      role: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/amritanshmsh/",
      description: "Visionary leader driving innovation in education technology"
    },
    {
      name: "Dr. Preeti Mishra",
      role: "Co-Founder & Director",
      linkedin: "https://www.linkedin.com/in/drpreetimishra/",
      description: "Educational expert shaping the future of learning platforms"
    }
  ];

  const teamMembers = [
    {
      name: "Chaitanya Gupta",
      role: "AI/ML Engineer",
      linkedin: "#",
      description: "Building intelligent systems that understand how students learn"
    },
    {
      name: "Siddhant Bansal",
      role: "Developer",
      linkedin: "#",
      description: "Crafting robust and scalable solutions for modern education"
    },
    {
      name: "Ziana Saif",
      role: "UI/UX Designer",
      linkedin: "#",
      description: "Creating intuitive and engaging experiences for learners"
    },
    {
      name: "Rakshak Barkur",
      role: "Frontend Developer",
      linkedin: "#",
      description: "Bringing educational interfaces to life with clean code"
    }
  ];

  const mentors = mentorsData.map(mentor => ({
    name: mentor.name,
    role: mentor.post,
    image: mentor.image,
    linkedin: mentor.socials.linkedin || '#',
    description: mentor.about
  }));

  return (
    <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen py-12 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            The passionate minds behind Conatus Bharat's mission to transform education
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden border ${isLightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold ${isLightMode ? 'text-black' : 'text-white'}`}>
                        {director.name}
                      </h3>
                      <p className={`font-semibold ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
                        {director.role}
                      </p>
                    </div>
                  </div>
                  <p className={`mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                    {director.description}
                  </p>
                  <a 
                    href={director.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${isLightMode ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'} transition-colors`}
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden border ${isLightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'} shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
              >
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-1 ${isLightMode ? 'text-black' : 'text-white'}`}>
                    {member.name}
                  </h3>
                  <p className={`font-semibold mb-3 ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
                    {member.role}
                  </p>
                  <p className={`text-sm mb-4 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-10 text-center">Mentors & Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden border ${isLightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'} shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
              >
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/default-avatar.png';
                      }}
                    />
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${isLightMode ? 'text-black' : 'text-white'}`}>
                    {mentor.name}
                  </h3>
                  <p className={`font-semibold mb-3 ${isLightMode ? 'text-gray-700' : 'text-gray-400'}`}>
                    {mentor.role}
                  </p>
                  <p className={`text-sm mb-4 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    {mentor.description}
                  </p>
                  <a 
                    href={mentor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${isLightMode ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'} transition-colors text-sm`}
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center p-8 rounded-2xl ${isLightMode ? 'bg-gray-100' : 'bg-gray-900'} mb-12`}>
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className={`text-lg mb-6 max-w-2xl mx-auto ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            We're always looking for passionate individuals to help us transform education
          </p>
          <Link 
            href="/careers" 
            className={`inline-block px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'} shadow-lg hover:shadow-xl`}
          >
            View Open Positions
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

export default TeamPage;