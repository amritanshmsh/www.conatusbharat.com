'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  Calculator,
  Languages,
  Globe,
  Sparkles,
  Bell,
  Search,
  Flame,
  GraduationCap,
} from 'lucide-react';

type Subject = {
  key: string;
  label: string;
  grade: string;
  chapters: number;
  topics: number;
  bg: string;
  icon: React.ReactNode;
  metrics: { label: string; value: number; color: string }[];
  trait: string;
};

const subjects: Subject[] = [
  {
    key: 'math',
    label: 'Mathematics',
    grade: 'Grade 6',
    chapters: 3,
    topics: 10,
    bg: 'bg-pastel-blue',
    icon: <Calculator size={18} />,
    metrics: [
      { label: 'Reasoning', value: 86, color: 'bg-iris' },
      { label: 'Problem solving', value: 78, color: 'bg-iris-400' },
      { label: 'Speed', value: 64, color: 'bg-iris-300' },
    ],
    trait: 'Visual learner · Curiosity high',
  },
  {
    key: 'english',
    label: 'English',
    grade: 'Grade 6',
    chapters: 2,
    topics: 5,
    bg: 'bg-pastel-yellow',
    icon: <BookOpen size={18} />,
    metrics: [
      { label: 'Comprehension', value: 92, color: 'bg-iris' },
      { label: 'Vocabulary', value: 81, color: 'bg-iris-400' },
      { label: 'Grammar', value: 70, color: 'bg-iris-300' },
    ],
    trait: 'Story-driven · Strong recall',
  },
  {
    key: 'social',
    label: 'Social Studies',
    grade: 'Grade 6',
    chapters: 2,
    topics: 5,
    bg: 'bg-pastel-peach',
    icon: <Globe size={18} />,
    metrics: [
      { label: 'Critical thinking', value: 74, color: 'bg-iris' },
      { label: 'Memory', value: 68, color: 'bg-iris-400' },
      { label: 'Linking ideas', value: 82, color: 'bg-iris-300' },
    ],
    trait: 'Connects across topics',
  },
  {
    key: 'hindi',
    label: 'Hindi',
    grade: 'Grade 6',
    chapters: 1,
    topics: 2,
    bg: 'bg-pastel-pink',
    icon: <Languages size={18} />,
    metrics: [
      { label: 'Reading', value: 88, color: 'bg-iris' },
      { label: 'Expression', value: 76, color: 'bg-iris-400' },
      { label: 'Writing', value: 71, color: 'bg-iris-300' },
    ],
    trait: 'Expressive · Confident voice',
  },
];

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState<Subject>(subjects[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="wonder"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-10 bg-paper text-ink overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-iris/[0.08] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pastel-yellow/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-iris" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
                What we're building right now
              </span>
            </div>
            <h2
              className="font-display font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              <span className="relative inline-block">
                <span className="text-iris">Wonder</span>
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-iris/20 rounded-full -z-0" />
              </span>
              .
              <br />
              <span className="text-ink/40">A school in your pocket.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg leading-relaxed text-ink/70">
              Wonder helps schools see every student. How they learn, where
              they're stuck, and what they're becoming.
            </p>
            <p className="mt-3 text-sm text-ink/55">
              Adaptive practice from Grade 3. Career diagnostic from Grade 8.
              Built for CBSE. NEP 2020 aligned. NCERT curriculum.
            </p>
            <Link
              href="https://wonderclassrooms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 group inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-iris transition"
            >
              Explore Wonder
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Interactive Wonder dashboard */}
        <div
          className={`relative rounded-[2rem] overflow-hidden bg-iris border border-iris-700 transition-all duration-700 ${
            seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 text-paper">
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="px-2.5 py-1 rounded-full bg-paper/15 border border-paper/20 inline-flex items-center gap-1.5">
                <Search size={12} />
                <span className="hidden sm:inline">Search topics, chapters, subjects…</span>
                <span className="sm:hidden">Search…</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full bg-paper/15 text-[11px] font-bold inline-flex items-center gap-1">
                <Flame size={11} />
                12
              </span>
              <span className="w-7 h-7 rounded-full bg-paper/15 inline-flex items-center justify-center">
                <Bell size={13} />
              </span>
              <span className="w-7 h-7 rounded-full bg-paper inline-flex items-center justify-center text-iris">
                <GraduationCap size={14} />
              </span>
            </div>
          </div>

          <div className="px-6 sm:px-8 pt-8 pb-6 text-paper">
            <div
              className="font-display font-bold leading-none mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
            >
              Let's Wonder, Ravi.
            </div>
            <div className="text-xs uppercase tracking-widest text-paper/60 mb-1">
              Continue
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              {active.icon}
              {active.label} · Chapter {active.chapters}
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3 text-paper/80 text-xs font-semibold tracking-widest uppercase">
                <span>My subjects</span>
                <span className="text-paper/50">tap to explore</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((s) => {
                  const isActive = s.key === active.key;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActive(s)}
                      className={`group text-left rounded-2xl px-4 py-3.5 ${s.bg} text-ink relative overflow-hidden transition-all duration-300 ${
                        isActive
                          ? 'ring-2 ring-paper scale-[1.015] shadow-xl'
                          : 'hover:scale-[1.01] hover:shadow-lg ring-1 ring-ink/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-ink/10 inline-flex items-center justify-center">
                            {s.icon}
                          </span>
                          <span className="font-bold text-sm">{s.label}</span>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className={`transition-transform ${
                            isActive ? 'rotate-0' : 'group-hover:rotate-12'
                          }`}
                        />
                      </div>
                      <div className="mt-2 text-[11px] text-ink/60">
                        {s.grade} · {s.chapters} chapters · {s.topics} topics
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-paper text-ink p-5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-ink/60">
                    Wonder · live insights
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-iris">
                    <Sparkles size={10} />
                    LIVE
                  </span>
                </div>

                <div className="text-base font-bold mb-1">{active.label}</div>
                <div className="text-xs text-ink/60 mb-4">{active.trait}</div>

                <div className="space-y-3 flex-1">
                  {active.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-ink/70">{m.label}</span>
                        <span className="text-xs font-bold tabular-nums">{m.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-ink/[0.06] overflow-hidden">
                        <div
                          key={`${active.key}-${m.label}`}
                          className={`h-full rounded-full ${m.color} transition-all duration-700`}
                          style={{ width: `${m.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-iris animate-pulse" />
                    Adaptive path active
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/50">
                    NEP-aligned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://wonderclassrooms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-iris transition-all duration-300 hover:scale-105"
          >
            Explore Wonder
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
