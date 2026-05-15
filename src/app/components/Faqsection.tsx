'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    q: 'What is Conatus Bharat?',
    a: "Conatus Bharat is an education company building tools that help every student understand who they are and what they're inclined toward. Our first product is Wonder, an adaptive learning platform for schools.",
  },
  {
    q: 'What is Wonder?',
    a: 'Wonder is our learning platform for Grades 3 to 12. Adaptive practice from Grade 3. Career diagnostic from Grade 8. NEP-aligned. CBSE curriculum.',
  },
  {
    q: 'What is the mission of Conatus Bharat?',
    a: 'To ensure every student knows who they are, and to help them work towards it.',
  },
  {
    q: 'Why was Conatus Bharat created?',
    a: "Because most students don't know their strengths or what to explore. Conatus Bharat exists to help children fall in love with learning by understanding themselves, not by being forced through a one-size-fits-all system.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-paper text-ink overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-iris/[0.06] blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-iris" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
                FAQ
              </span>
            </div>
            <h2
              className="font-display font-bold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Questions,
              <br />
              <span className="text-ink/40">answered.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
              The basics about Conatus Bharat and Wonder. Still curious?
              Write to us. A real person will reply.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-ink text-paper border-ink shadow-2xl shadow-ink/15'
                    : 'bg-paper border-ink/10 hover:border-ink/20 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`shrink-0 font-display text-sm font-bold w-9 h-9 rounded-xl inline-flex items-center justify-center ${
                      isOpen ? 'bg-iris text-paper' : 'bg-ink/[0.06] text-ink/70'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-semibold text-base sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-paper text-ink rotate-45' : 'bg-ink/[0.06] text-ink/70'
                    }`}
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pl-[4.5rem] sm:pl-[4.75rem]">
                      <div className="h-px w-full bg-paper/15 mb-4" />
                      <p className="text-sm sm:text-base text-paper/80 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl bg-ink text-paper p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 relative overflow-hidden">
          <div aria-hidden className="absolute -top-12 -right-12 w-44 h-44 rounded-full border-[10px] border-white/[0.06]" />
          <div className="relative">
            <div className="text-[11px] tracking-[0.25em] uppercase text-paper/55 mb-1">
              Still curious?
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl">
              Talk to us, like a human.
            </div>
          </div>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-iris text-paper text-sm font-semibold hover:bg-paper hover:text-ink transition-all hover:scale-105 self-start sm:self-auto"
          >
            Start a conversation
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
