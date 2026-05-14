"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === 'light';
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  return (
    <footer
      className={`relative overflow-hidden ${
        isLightMode ? 'bg-gray-50 text-gray-800 border-t border-gray-200' : 'bg-black text-white border-t border-white/10'
      }`}
    >
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none ${isLightMode ? '[--g:#000]' : '[--g:#fff]'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--g)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b ${isLightMode ? 'border-gray-200' : 'border-white/10'}`}>
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-5">
              <div className={`relative w-10 h-10 flex items-center justify-center rounded-xl border transition-all ${
                isLightMode ? 'bg-black border-black' : 'bg-white/[0.05] border-white/15 group-hover:border-white/30'
              }`}>
                <img
                  src="/assets/Logo_Conatus_dark.png"
                  alt="Conatus"
                  className={`w-6 h-6 object-contain ${isLightMode ? '' : ''}`}
                />
              </div>
              <span
                className={`font-extrabold text-xl tracking-tight ${isLightMode ? 'text-black' : 'text-white'}`}
                style={{ fontFamily: 'Antonio, sans-serif', letterSpacing: '-0.02em' }}
              >
                CONATUS BHARAT
              </span>
            </Link>

            <p className={`text-sm leading-relaxed mb-6 max-w-md ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
              Conatus Bharat is where understanding begins. We build ideas and tools that
              help people grow with clarity, purpose, and curiosity.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md">
              <label className={`block text-xs font-semibold tracking-widest uppercase mb-2 ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                Get our updates
              </label>
              <div className={`flex items-center gap-2 p-1.5 rounded-full border transition-all ${
                isLightMode ? 'bg-white border-gray-300 focus-within:border-black' : 'bg-white/[0.04] border-white/15 focus-within:border-white/40'
              }`}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.in"
                  className={`flex-1 bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-gray-500 ${isLightMode ? 'text-gray-900' : 'text-white'}`}
                />
                <button
                  type="submit"
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {submitted ? '✓ Sent' : 'Subscribe'}
                </button>
              </div>
              <p className={`text-[11px] mt-2 ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
                One email a month. No spam, ever.
              </p>
            </form>

            <div className="flex items-center gap-3 mt-6">
              {[
                { href: 'https://www.instagram.com/conatusbharat/', label: 'Instagram', icon: FaInstagram },
                { href: 'https://x.com/ConatusBharat', label: 'Twitter', icon: FaXTwitter },
                { href: 'https://www.linkedin.com/company/conatusbharat', label: 'LinkedIn', icon: FaLinkedin },
                { href: 'https://www.facebook.com/profile.php?id=61562931242268', label: 'Facebook', icon: FaFacebook },
                { href: 'https://www.youtube.com/@ConatusBharat', label: 'YouTube', icon: FaYoutube },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110 ${
                    isLightMode ? 'border-gray-300 text-gray-700 hover:border-black hover:text-black hover:bg-white' : 'border-white/15 text-gray-400 hover:border-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                Company
              </h3>
              <ul className={`space-y-2.5 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                <li><a href="/story" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Our Story</a></li>
                <li><a href="/team" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Team</a></li>
                <li><a href="/#about" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>The Problem</a></li>
                <li><a href="/press" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Press</a></li>
                <li><a href="/careers" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                Products
              </h3>
              <ul className={`space-y-2.5 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                <li>
                  <a href="https://wonderclassrooms.com" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 ${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>
                    Wonder
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-green-500/20 text-green-500">LIVE</span>
                  </a>
                </li>
                <li>
                  <span className={`inline-flex items-center gap-1.5 ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    School OS
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-500">SOON</span>
                  </span>
                </li>
                <li>
                  <span className={`inline-flex items-center gap-1.5 ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Build with Waffle
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-500">SOON</span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                Explore
              </h3>
              <ul className={`space-y-2.5 text-sm ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                <li><a href="/#faq" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>FAQs</a></li>
                <li><a href="/nep" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>NEP</a></li>
                <li><a href="https://medium.com/@amritanshmsh" target="_blank" rel="noopener noreferrer" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Blog</a></li>
                <li><a href="/contact" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>Contact</a></li>
                <li>
                  <a href="mailto:conatusbharat@gmail.com" className={`${isLightMode ? 'hover:text-black' : 'hover:text-white'} transition`}>
                    conatusbharat@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className={`text-xs ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Conatus Bharat Education Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="/T&C" className={`text-xs ${isLightMode ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'} transition`}>
              Terms
            </a>
            <a href="/PrivacyPolicy" className={`text-xs ${isLightMode ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'} transition`}>
              Privacy
            </a>
            <button
              onClick={() => setTheme(isLightMode ? 'dark' : 'light')}
              className={`text-xs px-3 py-1.5 border rounded-full transition flex items-center gap-1.5 ${
                isLightMode ? 'text-gray-600 border-gray-300 hover:text-black hover:border-black' : 'text-gray-400 border-white/15 hover:text-white hover:border-white/40'
              }`}
            >
              {isLightMode ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                  Dark
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                  Light
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
