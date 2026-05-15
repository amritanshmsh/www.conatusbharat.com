import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import LoopLogo from '../components/LoopLogo';
import mentorsData from '../data/mentors.json';

export const metadata: Metadata = {
  title: 'Leadership — Conatus Bharat',
  description:
    'The people guiding Conatus Bharat — and the educators who help us see clearly.',
};

const founders = [
  {
    name: 'Amritansh Mishra',
    role: 'Founder & CEO',
    bio:
      'Founded Conatus Bharat in 2024 after asking why students are expected to make life-changing career decisions before they understand themselves. Leads product, technology, and strategy.',
    linkedin: 'https://www.linkedin.com/in/amritanshmsh/',
  },
  {
    name: 'Dr. Preeti Mishra',
    role: 'Co-Founder & Director',
    bio:
      "Educator. Shapes the pedagogy and educational thinking behind every product. Has spent her career working with schools and students; brings the classroom truth to everything we build.",
    linkedin: 'https://www.linkedin.com/in/drpreetimishra/',
  },
];

type Mentor = {
  name: string;
  post: string;
  about: string;
  image: string;
  socials: { linkedin?: string };
};

export default function LeadershipPage() {
  const mentors = (mentorsData as Mentor[]).map((m) => ({
    name: m.name,
    role: m.post,
    bio: m.about,
    image: m.image,
    linkedin: m.socials.linkedin || '',
  }));

  return (
    <main className="bg-paper text-ink min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-ink/50 hover:text-iris transition mb-10"
        >
          <ArrowLeft size={12} />
          Back home
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-6">
            <LoopLogo size={14} tone="iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              Leadership
            </span>
          </div>
          <h1
            className="font-display font-bold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            The people
            <br />
            <span className="text-ink/40">guiding us.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl text-ink/70 leading-relaxed">
            The two of us at the centre — and the educators who help us see
            clearly.
          </p>
        </div>

        {/* Co-Founders */}
        <section className="mb-24">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-5">
            Co-founders
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {founders.map((f) => (
              <div
                key={f.name}
                className="rounded-3xl bg-ink text-paper p-8 sm:p-10 flex flex-col gap-6"
              >
                <div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
                    {f.name}
                  </h2>
                  <div className="text-sm text-iris-300 font-semibold mt-1">
                    {f.role}
                  </div>
                </div>
                <p className="text-paper/80 text-base leading-relaxed">{f.bio}</p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper/80 hover:text-iris-300 transition mt-auto"
                >
                  <FaLinkedin />
                  LinkedIn
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-end">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-3">
                Advisory board
              </div>
              <h2
                className="font-display font-bold leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
              >
                Educators who tell us
                <br />
                <span className="text-ink/40">when we're wrong.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
                We're guided by school leaders and professionals who have
                spent decades in Indian education. Their honesty is worth more
                than any feature.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((m, i) => {
              const tones = [
                'bg-pastel-blue',
                'bg-pastel-yellow',
                'bg-pastel-pink',
                'bg-pastel-green',
                'bg-pastel-peach',
                'bg-pastel-lilac',
                'bg-pastel-mint',
              ];
              const bg = tones[i % tones.length];
              return (
                <div
                  key={m.name}
                  className={`rounded-3xl ${bg} text-ink p-6 flex flex-col gap-4`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-ink/10 shrink-0">
                      {m.image && (
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-base leading-tight">
                        {m.name}
                      </div>
                      <div className="text-[11px] text-ink/65 leading-snug mt-0.5">
                        {m.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed line-clamp-5">
                    {m.bio}
                  </p>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/70 hover:text-iris transition mt-auto"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing */}
        <section className="rounded-3xl bg-ink text-paper p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl leading-tight">
              We're a small team rebuilding for 2026.
            </div>
            <p className="text-paper/70 text-sm mt-2">
              If you'd like to know more about working with us — see Work With Us.
            </p>
          </div>
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-paper text-ink text-sm font-semibold hover:bg-iris hover:text-paper transition self-start sm:self-auto"
          >
            Work With Us
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </section>
      </div>
    </main>
  );
}
