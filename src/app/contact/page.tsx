import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LoopLogo from '../components/LoopLogo';

export const metadata: Metadata = {
  title: 'Talk to us · Conatus Bharat',
  description:
    "We'd love to hear from schools, educators, parents, and anyone curious about Conatus Bharat.",
};

export default function ContactPage() {
  return (
    <main className="bg-paper text-ink min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40 pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-ink/50 hover:text-iris transition mb-10"
        >
          <ArrowLeft size={12} />
          Back home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris/10 border border-iris/20 mb-6">
            <LoopLogo size={14} tone="iris" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-iris">
              Talk to us
            </span>
          </div>
          <h1
            className="font-display font-bold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Tell us about
            <br />
            <span className="text-ink/40">your school.</span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-ink/70 leading-relaxed max-w-xl">
            We'd love to hear from schools, educators, parents, and anyone
            curious about Conatus Bharat. Tell us a little about you and
            we'll get back personally.
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="rounded-3xl bg-ink text-paper p-7 sm:p-10 space-y-5"
        >
          <input
            type="hidden"
            name="access_key"
            value="9ad00412-5324-47fd-95f3-92d34809e3a3"
          />

          {[
            { label: 'School Name', name: 'school_name', type: 'text' },
            { label: 'Principal / Contact Person', name: 'contact_person', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone', name: 'phone', type: 'tel' },
            { label: 'Location', name: 'location', type: 'text' },
          ].map((f) => (
            <div key={f.name}>
              <label className="block mb-1.5 text-xs font-semibold tracking-widest uppercase text-paper/70">
                {f.label}
              </label>
              <input
                type={f.type}
                name={f.name}
                required
                className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/15 rounded-xl text-paper outline-none focus:border-iris focus:bg-white/[0.06] transition placeholder:text-paper/30"
              />
            </div>
          ))}

          <div>
            <label className="block mb-1.5 text-xs font-semibold tracking-widest uppercase text-paper/70">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="How can we help your school?"
              className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/15 rounded-xl text-paper outline-none focus:border-iris focus:bg-white/[0.06] transition placeholder:text-paper/30"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-iris text-paper text-sm font-bold hover:bg-iris-400 transition-all hover:scale-105"
          >
            Send message
          </button>

          <p className="text-xs text-paper/55 pt-2">
            You can also reach us directly at{' '}
            <a
              href="mailto:conatusbharat@gmail.com"
              className="text-iris-300 hover:text-paper underline underline-offset-4 transition"
            >
              conatusbharat@gmail.com
            </a>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
