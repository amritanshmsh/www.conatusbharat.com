import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LoopLogo from './LoopLogo';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  children,
}: Props) {
  return (
    <main className="bg-paper text-ink min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-30 pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-ink/50 hover:text-iris transition mb-10"
        >
          <ArrowLeft size={12} />
          Back home
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-6">
            <LoopLogo size={14} tone="iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              {eyebrow}
            </span>
          </div>
          <h1
            className="font-display font-bold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <p className="mt-3 text-xs tracking-widest uppercase text-ink/40">
            Last updated: {lastUpdated}
          </p>
        </div>

        <article className="legal-prose space-y-7 text-ink/80 text-base leading-relaxed">
          {children}
        </article>

        <div className="mt-14 pt-7 border-t border-ink/10 text-xs text-ink/50">
          For any question about this document, write to{' '}
          <a
            href="mailto:conatusbharat@gmail.com"
            className="text-iris hover:text-iris-700 underline underline-offset-4 transition"
          >
            conatusbharat@gmail.com
          </a>
          .
        </div>
      </div>
    </main>
  );
}
