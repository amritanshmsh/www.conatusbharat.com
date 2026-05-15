import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LoopLogo from '../components/LoopLogo';

export const metadata: Metadata = {
  title: 'Work With Us · Conatus Bharat',
  description:
    'Applications are currently paused. We are a small team rebuilding before our next round of hiring in 2026.',
};

const areas = [
  {
    title: 'Engineering',
    items: ['Full Stack', 'Frontend', 'AI / ML', 'DevOps'],
  },
  {
    title: 'Design',
    items: ['UI / UX', 'Brand'],
  },
  {
    title: 'Education',
    items: ['Researchers', 'Curriculum specialists', 'Teachers'],
  },
  {
    title: 'Product',
    items: ['Product manager'],
  },
];

const traits = [
  'People who care about students and learning.',
  'Builders who love solving hard problems.',
  'Designers who think in systems.',
  'Educators who want to make an impact.',
  'Engineers who write clean, thoughtful code.',
  'Learners who grow fast.',
];

export default function WorkWithUsPage() {
  return (
    <main className="bg-paper text-ink min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-ink/50 hover:text-iris transition mb-10"
        >
          <ArrowLeft size={12} />
          Back home
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-6">
            <LoopLogo size={14} tone="iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              Work With Us
            </span>
          </div>
          <h1
            className="font-display font-bold leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            Build with us.
          </h1>
        </div>

        {/* Paused banner */}
        <div className="rounded-3xl bg-ink text-paper p-8 sm:p-10 mb-12 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border-[10px] border-white/10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris text-paper mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                Applications paused
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-4">
              We're rebuilding before our
              <br />
              next round of hiring in 2026.
            </h2>
            <p className="text-paper/75 text-base sm:text-lg leading-relaxed max-w-2xl">
              If you're an educator, engineer, designer, or researcher who
              believes in our mission, we'd love to hear from you when we
              open applications again.
            </p>
            <p className="text-paper/65 text-sm mt-4">
              In the meantime, send us a note at{' '}
              <a
                href="mailto:conatusbharat@gmail.com"
                className="text-iris-300 hover:text-paper underline underline-offset-4 transition"
              >
                conatusbharat@gmail.com
              </a>{' '}
              and we'll keep you in mind.
            </p>
          </div>
        </div>

        {/* Roles areas */}
        <section className="mb-12">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-3">
            Roles we'll be hiring for
          </div>
          <h2
            className="font-display font-bold leading-[1.02] tracking-[-0.03em] mb-8"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            When we reopen, these are the areas
            <br />
            <span className="text-ink/40">we'll be building.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
            {areas.map((a, i) => (
              <div
                key={a.title}
                className="bg-paper text-ink p-7 sm:p-8 hover:bg-ink hover:text-paper transition group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-display font-bold text-iris/40 group-hover:text-iris transition-colors leading-none"
                    style={{ fontSize: '1.5rem' }}
                  >
                    0{i + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-iris/40 group-hover:bg-iris transition-colors" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">
                  {a.title}
                </h3>
                <ul className="space-y-2">
                  {a.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-base opacity-80"
                    >
                      <span className="w-1 h-1 rounded-full bg-iris" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What we look for */}
        <section className="mb-10">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-3">
            What we look for
          </div>
          <h2
            className="font-display font-bold leading-[1.02] tracking-[-0.03em] mb-8"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            People who care.
          </h2>

          <ul className="space-y-2 max-w-2xl">
            {traits.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-base sm:text-lg text-ink/80 leading-relaxed"
              >
                <span className="mt-2.5 w-1 h-1 rounded-full bg-iris shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer note */}
        <div className="rounded-3xl border-2 border-ink/10 bg-paper p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-iris font-bold mb-1">
              When we reopen
            </div>
            <a
              href="mailto:conatusbharat@gmail.com"
              className="font-display font-bold text-2xl sm:text-3xl hover:text-iris transition"
            >
              conatusbharat@gmail.com
            </a>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-iris transition self-start sm:self-auto"
          >
            Back to Conatus
          </Link>
        </div>
      </div>
    </main>
  );
}
