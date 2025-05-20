"use client"
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === 'light';
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <footer className={`${isLightMode ? 'bg-white text-gray-800' : 'bg-black text-white'} px-6 md:px-20 py-12`}>
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <img
              src={isLightMode ? "/assets/Logo_Conatus_light.png" : "/assets/Logo_Conatus_dark.png"}
              alt="Conatus Logo"
              className="w-4 h-4"
            />
            <span className={`${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>›</span>
            <span className={`${isLightMode ? 'text-gray-700' : 'text-white'} font-light`}>Quick Links</span>
          </div>
          <button
            onClick={() => setTheme(isLightMode ? 'dark' : 'light')}
            className={`text-xs px-3 py-1 border rounded-md ${isLightMode ? 'text-gray-600 border-gray-400 hover:text-black hover:border-black' : 'text-gray-400 border-gray-600 hover:text-white hover:border-white'} transition`}
          >
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className={`space-y-2 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            <li><a href="/story" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Our Story</a></li>
            <li><a href="/#about" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>The Problem</a></li>
            <li><a href="/press" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Press</a></li>
            <li><a href="/careers" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Careers</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Products</h3>
          <ul className={`space-y-2 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            <li><a href="https://iamwonder.in" target="_blank" rel="noopener noreferrer" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Wonder – Adaptive Learning</a></li>
            <li><a href="/lumen" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Lumen Hub – ERP for Schools</a></li>
            <li><a href="https://elevenmedia.agency" target="_blank" rel="noopener noreferrer" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Eleven – Media & Branding</a></li>
            <li><a href="/waffle" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Waffle – Hack Club Network</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className={`space-y-2 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            <li><a href="/mentors" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Mentors</a></li>
            <li><a href="/#faq" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>FAQs</a></li>
            <li><a href="/Insight" target="_blank" rel="noopener noreferrer" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Insights</a></li>
            <li><a href="/" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Home</a></li>
            <li><a href="/contact" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>Let’s Talk</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className={`text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            We'd love to collaborate or answer your queries. Write to us at{" "}
            <a
              href="mailto:contact@conatusbharat.com"
              className="text-blue-400 hover:underline"
            >
              contact@conatusbharat.com
            </a>
          </p>
          <div className={`flex items-center gap-4 mt-4 ${isLightMode ? 'text-gray-700' : 'text-white'}`}>
            <a href="https://www.instagram.com/conatusbharat/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-gray-300 text-base" />
            </a>
            <a href="https://x.com/ConatusBharat" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter className="hover:text-gray-300 text-base" />
            </a>
            <a href="https://www.linkedin.com/company/conatusbharat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-gray-300 text-base" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61562931242268" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-gray-300 text-base" />
            </a>
            <a href="https://www.youtube.com/@ConatusBharat" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-gray-300 text-base" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright and Legal Links */}
      <div className={`mt-10 border-t border-gray-800 pt-6 text-center text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'} space-y-2`}>
        <div>
          <a href="/T&C" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Terms and Conditions</a>
          <span className="mx-2">|</span>
          <a href="/PrivacyPolicy" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Privacy Policy</a>
        </div>
        <div className="text-gray-500">
          © {new Date().getFullYear()} Conatus Bharat Education Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;