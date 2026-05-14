"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'Problem' },
  { href: '/#products', label: 'Wonder' },
  { href: '/team', label: 'Team' },
  { href: '/press', label: 'Press' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/20 backdrop-blur-md transition-all duration-300 group-hover:from-white/25 group-hover:to-white/10 group-hover:border-white/40">
              <img
                src="/assets/Logo_Conatus_dark.png"
                alt="Conatus Bharat"
                className="w-5 h-5 object-contain"
              />
            </div>
            <span
              className="text-white font-extrabold text-lg tracking-tight hidden sm:inline"
              style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
            >
              CONATUS BHARAT
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/10"
          >
            Let's Talk
            <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-black/95 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold bg-white text-black hover:bg-gray-200 transition text-center"
          >
            Let's Talk →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
