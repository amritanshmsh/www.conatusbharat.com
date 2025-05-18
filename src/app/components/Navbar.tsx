"use client";
import React from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  return (
    <nav className={`w-full shadow px-6 py-2 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={isLightMode ? "/assets/Logo_Conatus_light.png" : "/assets/Logo_Conatus_dark.png"}
            alt="Conatus Bharat Logo"
            className="h-6 w-auto"
          />
        </div>

        {/* Subtle Center Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-light opacity-50">
          Conatus Bharat
        </div>

        {/* Let’s Talk */}
        <div>
          <a
            href="/contact"
            className={`text-sm underline underline-offset-4 transition ${isLightMode ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'}`}
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
