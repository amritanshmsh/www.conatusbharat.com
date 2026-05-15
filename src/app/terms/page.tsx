import type { Metadata } from 'next';
import LegalLayout from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — Conatus Bharat',
  description:
    'Terms governing the use of conatusbharat.com and services provided by Conatus Bharat Education Pvt. Ltd.',
};

const Section = ({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="font-display font-bold text-xl sm:text-2xl text-ink leading-tight tracking-tight">
      <span className="text-iris mr-2">{n}.</span>
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </section>
);

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms of Service"
      title="The fine print, in plain English."
      subtitle='These Terms of Service ("Terms") govern your use of the website conatusbharat.com and any service provided by Conatus Bharat Education Pvt. Ltd. By using our website or contacting us, you agree to these Terms. If you don’t agree, please don’t use our services.'
      lastUpdated="15 May 2026"
    >
      <Section n="1" title="About us">
        <p>
          Conatus Bharat Education Pvt. Ltd. is a private limited company
          incorporated in India on 10 December 2024, with its registered
          office in Lucknow, Uttar Pradesh, India.
        </p>
      </Section>

      <Section n="2" title="What this website is for">
        <p>
          conatusbharat.com is our company website. It exists to share who we
          are, what we're building, and how to get in touch.
        </p>
        <p>
          Our products, including Wonder, have their own terms of service. If
          you use Wonder, you'll agree to those terms separately at{' '}
          <a
            href="https://wonderclassrooms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-iris hover:text-iris-700 underline underline-offset-4"
          >
            wonderclassrooms.com
          </a>
          .
        </p>
      </Section>

      <Section n="3" title="Using our website">
        <p>You may use our website for personal and non-commercial purposes. You may not:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Copy, reproduce, or republish content from this site without permission</li>
          <li>Attempt to harm, disrupt, or access our systems without authorisation</li>
          <li>Use our brand, logos, or content to mislead others</li>
        </ul>
      </Section>

      <Section n="4" title="Intellectual property">
        <p>
          All content on this website — text, images, design, logos,
          trademarks — belongs to Conatus Bharat Education Pvt. Ltd. or is
          used with permission. "Conatus Bharat," "Wonder," and related marks
          are our trademarks (pending registration).
        </p>
        <p>You may quote short excerpts with credit. For anything more, please write to us.</p>
      </Section>

      <Section n="5" title="Contact form">
        <p>
          When you fill our contact form, you give us permission to contact
          you in response. Your data is handled per our Privacy Policy.
        </p>
      </Section>

      <Section n="6" title="Our products are still being built">
        <p>
          Conatus Bharat is an early-stage company. Our products are under
          active development. Features described on this site may change. We
          make no warranty that products described as "coming" will be
          released on any specific date, or at all.
        </p>
      </Section>

      <Section n="7" title="No professional advice">
        <p>
          Information on this site is general. It is not educational, career,
          legal, or medical advice. Schools, teachers, and parents should use
          their own judgement when making decisions about students.
        </p>
      </Section>

      <Section n="8" title="Limitation of liability">
        <p>
          To the maximum extent permitted by Indian law, Conatus Bharat is
          not liable for indirect, incidental, or consequential damages
          arising from your use of this website.
        </p>
      </Section>

      <Section n="9" title="Governing law">
        <p>
          These Terms are governed by the laws of India. Any dispute will be
          resolved in the courts of Lucknow, Uttar Pradesh.
        </p>
      </Section>

      <Section n="10" title="Changes to these Terms">
        <p>
          We may update these Terms from time to time. The "Last updated"
          date at the top will tell you when. Continued use of the website
          after changes means you agree to the new Terms.
        </p>
      </Section>

      <Section n="11" title="Contact">
        <p>For any question about these Terms:</p>
        <div className="rounded-2xl bg-ink/[0.04] border border-ink/10 p-5 space-y-1 text-sm">
          <div className="font-semibold text-ink">Conatus Bharat Education Pvt. Ltd.</div>
          <div>Lucknow, Uttar Pradesh, India</div>
          <div>
            Email:{' '}
            <a
              href="mailto:conatusbharat@gmail.com"
              className="text-iris hover:text-iris-700 underline underline-offset-4"
            >
              conatusbharat@gmail.com
            </a>
          </div>
        </div>
      </Section>
    </LegalLayout>
  );
}
