

'use client';

import Link from 'next/link';
import React from 'react';

const blogs = [
  {
    title: 'Walking Paradoxes',
    url: 'https://medium.com/@amritanshmsh/walking-paradoxes-bd02b402f417',
  },
  // Add more blogs here as needed
];

const InsightPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Insights & Writings</h1>

      <div className="space-y-8 mb-12">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 bg-[#111] border border-white/10 rounded-lg p-6 hover:bg-[#1a1a1a] transition min-h-[10rem]"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-2">{blog.title}</h2>
              <p className="text-gray-400 text-base mb-2">
                Society loves labels. You’re either a writer or a builder, a dreamer or a doer, an artist or an entrepreneur. But what happens when you’re all of those things at once? What happens when you defy the neat little boxes the world tries to put you in?..
              </p>
              <p className="text-gray-500 text-sm mb-1">By Amritansh Mishra</p>
              <span className="text-sm text-gray-500">Jan 31</span>
            </div>
            <img
              src="/assets/original-59034650a70fdc803d709a0684f91592.jpg"
              alt="Blog thumbnail"
              className="w-36 h-36 object-cover rounded-md border border-white/10"
            />
          </a>
        ))}
      </div>

      <Link href="/">
        <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
          ← Back
        </button>
      </Link>
    </div>
  );
};

export default InsightPage;