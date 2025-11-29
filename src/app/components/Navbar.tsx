"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';




const icons = [
  { href: '/', label: 'Home', svg: <img src="/assets/Logo_Conatus_dark.png" alt="Conatus Bharat Logo" className="h-6 w-6" /> },
  { href: '/team', label: 'Team', svg: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><circle cx="19" cy="7" r="4"/><path d="M2 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M14 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg> },
  { href: '/contact', label: 'Contact', svg: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="22" height="18" rx="2"/><path d="M3 7l11 7 11-7"/></svg> },
  { href: '/#products', label: 'Wonder', svg: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
];





const Navbar = () => {
  return (
  <nav className="w-full flex items-center justify-center py-0 fixed top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-700">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 group">
        <div className="bg-black w-[320px] h-[36px] rounded-b-[2rem] rounded-t-none shadow-xl transition-all duration-500 flex items-center justify-center relative group-hover:w-[520px] group-hover:h-[56px] group-hover:rounded-b-[2.5rem] group-hover:rounded-t-none group-hover:shadow-2xl mx-auto border-b-2 border-white/40">
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center gap-16 opacity-0 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:pointer-events-auto">
            {icons.map((item) => (
              <Link key={item.label} href={item.href} className="flex items-center justify-center">
                <span className="block text-white" style={{width: 40, height: 40}}>{item.svg}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
