import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import LoopLogo from '../components/LoopLogo';

export const metadata: Metadata = {
  title: 'Our Story — Conatus Bharat',
  description:
    'Why Conatus Bharat exists — and a note from the founder about the journey so far.',
};

export default function StoryPage() {
  return (
    <main className="bg-paper text-ink min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-ink/50 hover:text-iris transition mb-10"
        >
          <ArrowLeft size={12} />
          Back home
        </Link>

        {/* Hero */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-6">
            <LoopLogo size={14} tone="iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              Our Story
            </span>
          </div>
          <h1
            className="font-display font-bold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            "Own Tomorrow."
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-ink/75 leading-relaxed">
            Tomorrow belongs to those who understand themselves. That is why
            Conatus Bharat exists — to help every student, every school, and
            every learning journey own theirs.
          </p>
        </div>

        {/* The why */}
        <article className="space-y-7 text-lg sm:text-xl leading-relaxed text-ink/75">
          <p>
            The story of Conatus Bharat is the story of{' '}
            <span className="text-ink font-medium">countless children</span> who
            were guided into traditional careers — not because they weren't
            capable of more, but because no one helped them understand their
            unique gifts, strengths, and passions.
          </p>

          <p>
            For years, students have been measured by a narrow definition of
            success.
          </p>

          <div className="rounded-3xl bg-pastel-yellow text-ink p-7 sm:p-9 my-2">
            <ul className="space-y-3 font-display font-semibold text-xl sm:text-2xl leading-tight">
              <li>If they struggled in math — they were called weak.</li>
              <li>If they excelled in creativity — it was called a hobby.</li>
              <li>If they explored beyond the syllabus — it was discouraged.</li>
            </ul>
          </div>

          <p className="text-2xl sm:text-3xl font-display font-bold text-ink leading-tight pt-2">
            But the truth is simple:
          </p>

          <blockquote
            className="rounded-3xl bg-ink text-paper p-9 sm:p-12 font-display font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            "Every child is gifted —
            <br />
            <span className="text-iris-300">just not in the same way.</span>"
          </blockquote>

          <p>Conatus Bharat was built to change this reality.</p>

          <p>
            We believe{' '}
            <span className="text-ink font-medium">
              talent needs direction, not conformity
            </span>{' '}
            — and that children deserve an education that adapts to them, not
            the other way around.
          </p>

          <p>This belief shapes everything we build. We help children:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Discover who they truly are',
              'Understand their natural abilities',
              'Explore unconventional paths',
              'Become exceptional in what they love',
            ].map((line) => (
              <div
                key={line}
                className="rounded-2xl bg-ink/[0.03] border border-ink/10 px-5 py-4 text-base sm:text-lg font-medium text-ink"
              >
                {line}
              </div>
            ))}
          </div>
        </article>

        {/* For students / for schools split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
          <div className="rounded-3xl bg-pastel-blue p-7 sm:p-8">
            <div className="text-[11px] tracking-[0.25em] uppercase text-ink/60 mb-3">
              For students
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
              Discover who you are.
            </h3>
            <p className="text-ink/75 text-base">
              Every child carries unique potential. Through personalised
              insights and adaptive learning, we help children recognise their
              abilities and shape their own extraordinary futures.
            </p>
          </div>
          <div className="rounded-3xl bg-pastel-pink p-7 sm:p-8">
            <div className="text-[11px] tracking-[0.25em] uppercase text-ink/60 mb-3">
              For schools
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
              See every student.
            </h3>
            <p className="text-ink/75 text-base">
              We partner with schools to create learning environments that
              recognise diverse talents, encourage personalised pathways, and
              prepare students not just for exams — but for life.
            </p>
          </div>
        </div>

        {/* Founder note */}
        <div className="mt-20 rounded-3xl bg-ink text-paper p-8 sm:p-12 lg:p-14">
          <div className="text-[11px] tracking-[0.25em] uppercase text-paper/55 mb-5">
            A note from the founder
          </div>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-paper/85">
            <p>
              I started Conatus Bharat because I was a student who didn't know
              what to do with his life. I was pushed into engineering because
              it was the safe choice — not because anyone helped me understand
              what I was actually good at, or what I cared about.
            </p>
            <p>I don't want that to happen to another child.</p>
            <p>
              Wonder is the first thing we've built. It's far from perfect.
              The road has been hard, the team has changed, and many things we
              hoped to launch by now haven't launched yet. But the mission
              hasn't changed: to help every student understand who they are —
              and to help them work towards it.
            </p>
            <p>
              If you're a school, a teacher, a parent, or a student who
              believes education can be more honest about who children are —
              we'd love to hear from you.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-lg">— Amritansh Mishra</div>
              <div className="text-xs text-paper/55 mt-0.5">Founder, Conatus Bharat</div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-iris text-paper text-sm font-semibold hover:bg-iris-400 transition"
            >
              Talk to us
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
