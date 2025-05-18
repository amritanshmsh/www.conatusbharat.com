"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F24] text-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src="/assets/Logo_Conatus_dark.png" alt="Conatus Bharat Logo" className="h-6 w-auto" />
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="/story" className="hover:text-gray-300">Story</a>
          <a href="/mentors" className="hover:text-gray-300">Mentors</a>
          <a href="/products" className="hover:text-gray-300">The How ?</a>
        </div>

        {/* Right: Let’s Talk Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="px-3 py-1.5 text-sm rounded-md bg-white text-[#0B0F24] font-medium hover:bg-gray-200 transition"
          >
            Let’s Talk
          </a>
        </div>

        {/* Mobile: Contact Icon and Hamburger */}
        <div className="md:hidden flex items-center">
          <a href="/contact" className="mr-4">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8 8-8" />
            </svg>
          </a>
          <button type="button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 text-white bg-[#0B0F24] px-6 py-4 shadow-md rounded-b-md">
          <a href="#" className="block hover:text-gray-300">Home</a>
          <a href="/story" className="block hover:text-gray-300">Story</a>
          <a href="/mentors" className="block hover:text-gray-300">Mentors</a>
          <a href="/products" className="block hover:text-gray-300">The How ?</a>
          <a href="/contact" className="block hover:text-gray-300">Let’s Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
