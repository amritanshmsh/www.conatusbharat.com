'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LoopLogo from './LoopLogo';

const links = [
  { href: '/#wonder', label: 'Wonder' },
  { href: '/story', label: 'Story' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/work-with-us', label: 'Work With Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div
        className={`mx-auto transition-all duration-500 ease-out pointer-events-auto ${
          scrolled
            ? 'mt-3 max-w-3xl px-4'
            : 'mt-5 max-w-6xl px-6'
        }`}
      >
        <nav
          className={`relative flex items-center justify-between rounded-full transition-all duration-500 ease-out border ${
            scrolled
              ? 'bg-ink/85 backdrop-blur-xl border-white/10 px-3 py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]'
              : 'bg-paper/80 backdrop-blur-md border-ink/10 px-4 py-2.5 shadow-[0_4px_24px_-8px_rgba(10,10,10,0.15)]'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 pr-3 pl-1"
          >
            <LoopLogo
              size={28}
              tone={scrolled ? 'paper' : 'ink'}
              className="transition-transform duration-500 group-hover:rotate-180"
            />
            <span
              className={`font-display font-bold text-sm tracking-tight transition-colors duration-500 hidden sm:inline ${
                scrolled ? 'text-paper' : 'text-ink'
              }`}
            >
              CONATUS
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'text-paper/70 hover:text-paper hover:bg-white/10'
                    : 'text-ink/70 hover:text-ink hover:bg-ink/[0.04]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              scrolled
                ? 'bg-iris text-paper hover:bg-iris-400 shadow-[0_8px_24px_-6px_rgba(91,107,255,0.6)]'
                : 'bg-ink text-paper hover:bg-iris shadow-[0_8px_24px_-8px_rgba(10,10,10,0.4)]'
            }`}
          >
            Let's talk
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden p-2 rounded-full transition ${
              scrolled
                ? 'text-paper hover:bg-white/10'
                : 'text-ink hover:bg-ink/5'
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            open ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 mt-0 opacity-0'
          }`}
        >
          <div className="rounded-3xl bg-ink/95 backdrop-blur-xl border border-white/10 p-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block px-4 py-2.5 rounded-2xl text-sm font-medium text-paper/80 hover:text-paper hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-between mt-2 px-4 py-3 rounded-2xl bg-iris text-paper text-sm font-semibold hover:bg-iris-400 transition"
            >
              Let's talk
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
