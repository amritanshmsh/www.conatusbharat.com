'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ArrowUpRight, Mail } from 'lucide-react';
import LoopLogo from './LoopLogo';

const products = [
  {
    href: 'https://wonderclassrooms.com',
    label: 'Wonder',
    tag: 'LIVE',
    external: true,
  },
];

const company = [
  { href: '/story', label: 'Our Story' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/work-with-us', label: 'Work With Us' },
];

const legal = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://www.instagram.com/conatusbharat/', label: 'Instagram', icon: FaInstagram },
  { href: 'https://x.com/ConatusBharat', label: 'X', icon: FaXTwitter },
  { href: 'https://www.linkedin.com/company/conatusbharat', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://www.facebook.com/profile.php?id=61562931242268', label: 'Facebook', icon: FaFacebook },
  { href: 'https://www.youtube.com/@ConatusBharat', label: 'YouTube', icon: FaYoutube },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <LoopLogo
                size={36}
                tone="paper"
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              <span className="font-display font-bold text-2xl tracking-tight">
                CONATUS BHARAT
              </span>
            </Link>

            <p className="text-paper/70 text-sm sm:text-base leading-relaxed max-w-md mb-3">
              A place where understanding begins. We build tools that help
              students understand themselves.
            </p>
            <p className="text-paper/45 text-xs sm:text-sm mb-7">
              Conatus Bharat Education Pvt. Ltd. · Lucknow, India · Est. 2024
            </p>

            <form onSubmit={subscribe} className="max-w-md">
              <label className="block text-[11px] tracking-[0.25em] uppercase text-paper/60 mb-2.5">
                The monthly note
              </label>
              <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/15 bg-white/[0.04] focus-within:border-iris transition">
                <Mail size={16} className="ml-3 text-paper/50 shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.in"
                  className="flex-1 bg-transparent px-1 py-1.5 text-sm outline-none placeholder:text-paper/40 text-paper"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-iris text-paper text-xs font-bold hover:bg-iris-400 transition"
                >
                  {submitted ? '✓ Sent' : 'Subscribe'}
                </button>
              </div>
              <p className="text-[11px] mt-2 text-paper/40">
                One email a month. No spam, ever.
              </p>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-paper/60 mb-4">
                Products
              </h3>
              <ul className="space-y-2.5 text-sm text-paper/80">
                {products.map((p) =>
                  p.external ? (
                    <li key={p.label}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-iris-300 transition"
                      >
                        {p.label}
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-iris/20 text-iris-300">
                          {p.tag}
                        </span>
                      </a>
                    </li>
                  ) : (
                    <li key={p.label}>
                      <Link href={p.href} className="hover:text-iris-300 transition">
                        {p.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-paper/60 mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-paper/80">
                {company.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-iris-300 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-paper/60 mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm text-paper/80">
                {legal.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-iris-300 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="mailto:conatusbharat@gmail.com"
                    className="text-paper/60 hover:text-iris-300 transition text-xs"
                  >
                    conatusbharat@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8">
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full inline-flex items-center justify-center border border-white/15 text-paper/70 hover:text-iris-300 hover:border-iris/40 hover:bg-white/5 transition"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-paper/50">
            <span>© {new Date().getFullYear()} Conatus Bharat Education Pvt Ltd.</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="select-none pointer-events-none w-full text-center font-display font-bold leading-none text-paper/[0.04]"
        style={{ fontSize: 'clamp(4rem, 18vw, 16rem)', letterSpacing: '-0.04em' }}
      >
        CONATUS
      </div>
    </footer>
  );
}
