'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

const CareersPage = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  const jobs = [
    {
      title: 'Full Stack Developer',
      location: 'Remote / Hybrid (Lucknow)',
      description: 'Build and scale the Wonder platform — dashboards, insights, analytics, and student profiling systems.',
      skills: 'Node.js, Express, Prisma, MongoDB, Kotlin/Compose (optional), React'
    },
    {
      title: 'Frontend Developer',
      location: 'Remote / Hybrid (Lucknow)',
      description: 'Bring our product to life with clean, minimal interfaces.',
      skills: 'React, Vite, Tailwind, Three.js, R3F (bonus)'
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote / Online',
      description: 'Design premium, intuitive experiences for students, teachers, and principals.',
      skills: 'User journeys, dashboards, icons, micro-interactions, landing pages'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Hybrid (Lucknow)',
      description: 'Manage infrastructure, deployment pipelines, uptime, and platform reliability.',
      skills: 'CI/CD, Docker, cloud (AWS/DigitalOcean), monitoring'
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote / Hybrid (Lucknow)',
      description: 'Build learning models for student profiling, skill mapping, and insight generation.',
      skills: 'Experience in educational data or psychometrics (bonus)'
    },
    {
      title: 'Researchers (Education & Learning Sciences)',
      location: 'Remote / Online',
      description: 'Research learning patterns, MI framework, cognitive processes, and student behaviour.',
      skills: 'NEP alignment, pedagogy, assessment models'
    },
    {
      title: 'Teachers / Educators (Academic Advisors)',
      location: 'Remote / Hybrid (Lucknow)',
      description: 'Help convert pedagogy into models, validate assessments, review student insights, and guide product direction.',
      skills: 'Teaching experience, curriculum development'
    },
    {
      title: 'Product Manager',
      location: 'Remote / Hybrid',
      description: 'Connect engineering, research, and design to create a cohesive product experience.',
      skills: 'Product strategy, stakeholder management, technical understanding'
    },
    {
      title: 'Content & Curriculum Specialist',
      location: 'Remote / Online',
      description: 'Build learning content, question banks, skills mapping, and student pathways.',
      skills: 'Content creation, curriculum design, educational standards'
    }
  ];

  const createMailtoLink = (jobTitle: string) => {
    const subject = encodeURIComponent(`Enquiry For ${jobTitle}`);
    const body = encodeURIComponent(`Hi Conatus Bharat Team,

I am interested in applying for the position of ${jobTitle}.

Name: 
Email: 
Phone: 
Location: 
Experience: 
LinkedIn/Portfolio: 

Why I'm interested:


Best regards`);
    return `mailto:conatusbharat@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen py-12 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at Wonder Classrooms</h1>
          <p className="text-xl md:text-2xl mb-6 font-medium">
            Build the future of learning intelligence.
          </p>
          <p className={`text-lg ${isLightMode ? 'text-gray-700' : 'text-gray-300'} max-w-3xl mx-auto mb-4`}>
            We're creating a world where every student is understood — and every school can guide them better.
            If this mission excites you, we'd love to hear from you.
          </p>
          <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Work Modes: <span className="font-medium">Remote · Online · Hybrid (Lucknow)</span>
          </p>
        </div>

        {/* Divider */}
        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${isLightMode ? 'bg-gray-50 border-gray-200 hover:bg-gray-100' : 'bg-gray-900 border-gray-800 hover:bg-gray-800'} transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{job.title}</h3>
                    <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      {job.location}
                    </p>
                  </div>
                  <a
                    href={createMailtoLink(job.title)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}
                  >
                    Apply Now
                  </a>
                </div>
                <p className={`mb-3 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                  <span className="font-medium">Role:</span> {job.description}
                </p>
                <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                  <span className="font-medium">Skills:</span> {job.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What We Look For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'People who care about students and learning',
              'Builders who love solving hard problems',
              'Designers who think in systems',
              'Educators who want to make an impact',
              'Engineers who write clean, thoughtful code',
              'Learners who grow fast'
            ].map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${isLightMode ? 'bg-gray-50' : 'bg-gray-900'}`}
              >
                <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`${isLightMode ? 'border-gray-300' : 'border-gray-700'} border-b mb-12`}></div>

        <div className={`text-center p-8 rounded-xl ${isLightMode ? 'bg-gray-50' : 'bg-gray-900'}`}>
          <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
          <p className={`mb-6 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
            Send your resume + portfolio (if any) to:
          </p>
          <a
            href={createMailtoLink('General Application')}
            className={`inline-block text-xl font-semibold hover:underline ${isLightMode ? 'text-black' : 'text-white'}`}
          >
            conatusbharat@gmail.com
          </a>
          <p className={`mt-4 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Click to send an email with a pre-filled template
          </p>
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

export default CareersPage;