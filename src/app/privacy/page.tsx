import type { Metadata } from 'next';
import LegalLayout from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Conatus Bharat',
  description:
    'How Conatus Bharat collects, uses, and protects personal information.',
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

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="How we handle your data."
      subtitle="This Privacy Policy describes how Conatus Bharat Education Pvt. Ltd. (“Conatus Bharat,” “we,” “us,” “our”) collects, uses, and protects personal information when you visit our website or use our products including Wonder."
      lastUpdated="15 May 2026"
    >
      <p>
        We are committed to protecting the privacy of every visitor, school,
        teacher, parent, and student.
      </p>

      <Section n="1" title="Who we are">
        <p>
          Conatus Bharat Education Pvt. Ltd. is a private limited company
          incorporated in India on 10 December 2024, with its registered
          office in Lucknow, Uttar Pradesh, India.
        </p>
        <p>
          You can reach us at{' '}
          <a
            href="mailto:conatusbharat@gmail.com"
            className="text-iris hover:text-iris-700 underline underline-offset-4"
          >
            conatusbharat@gmail.com
          </a>{' '}
          for any privacy question or concern.
        </p>
      </Section>

      <Section n="2" title="What information we collect">
        <p>When you fill the contact form on our website, we collect:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>School name and location</li>
          <li>Your name and role</li>
          <li>Email address and phone number</li>
          <li>Any message you choose to share</li>
        </ul>
        <p>
          When schools, teachers, parents, and students use Wonder, we collect
          information necessary to provide the service. This is described in
          detail in Wonder’s separate Privacy Policy at{' '}
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
        <p className="font-semibold text-ink">We do not collect more than we need.</p>
      </Section>

      <Section n="3" title="How we use your information">
        <p>We use the information you give us only to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Respond to your enquiry</li>
          <li>Provide and improve our products</li>
          <li>
            Communicate with you about Conatus Bharat (only if you've asked
            us to)
          </li>
        </ul>
        <p>
          We do not sell your data. We do not share it with advertisers. We
          do not use it for purposes other than running our products and
          operating our company.
        </p>
      </Section>

      <Section n="4" title="Children's data">
        <p>
          Wonder is designed for students in Grades 3 to 12, including
          children. We treat children's data with extra care:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>We collect only what is needed to make Wonder work for the student.</li>
          <li>
            Children's progress and performance are visible to their teachers
            and parents only — never publicly, never to other students,
            never to third parties.
          </li>
          <li>We never sell, rent, or share children's data with advertisers.</li>
          <li>
            Parents and schools can request deletion of a child's data at any
            time by writing to conatusbharat@gmail.com.
          </li>
        </ul>
        <p>
          We are committed to compliance with the Digital Personal Data
          Protection Act 2023 (DPDP Act) and relevant Indian laws governing
          children's data.
        </p>
      </Section>

      <Section n="5" title="Where your data is stored">
        <p>
          Your data is stored on secure servers, encrypted in transit and at
          rest. We use trusted infrastructure providers to host our services.
        </p>
      </Section>

      <Section n="6" title="Who we share data with">
        <p>We share data only with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Service providers who help us run our products (such as hosting,
            email delivery), under strict confidentiality
          </li>
          <li>Law enforcement or government bodies, only when required by Indian law</li>
          <li>
            Schools you've authorised to receive your data (in the case of
            Wonder)
          </li>
        </ul>
      </Section>

      <Section n="7" title="Your rights">
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Know what data we have about you</li>
          <li>Correct any inaccurate data</li>
          <li>Ask us to delete your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, write to{' '}
          <a
            href="mailto:conatusbharat@gmail.com"
            className="text-iris hover:text-iris-700 underline underline-offset-4"
          >
            conatusbharat@gmail.com
          </a>
          . We'll respond within 30 days.
        </p>
      </Section>

      <Section n="8" title="How long we keep your data">
        <p>
          We keep data only as long as needed for the purpose it was
          collected, or as required by law. Contact form enquiries are kept
          for up to 24 months unless you ask us to delete them sooner.
        </p>
      </Section>

      <Section n="9" title="Cookies">
        <p>
          Our website uses essential cookies needed for the site to function.
          We do not use cookies for advertising or third-party tracking.
        </p>
      </Section>

      <Section n="10" title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do,
          we'll update the "Last updated" date at the top, and for
          significant changes, we'll notify users directly.
        </p>
      </Section>

      <Section n="11" title="Contact us">
        <p>For any question about this Privacy Policy:</p>
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

        <h3 className="font-display font-bold text-lg text-ink pt-3">Grievance Officer</h3>
        <p>
          In accordance with the Information Technology Act 2000 and the DPDP
          Act 2023, our Grievance Officer is:
        </p>
        <div className="rounded-2xl bg-ink/[0.04] border border-ink/10 p-5 space-y-1 text-sm">
          <div className="font-semibold text-ink">Amritansh Mishra</div>
          <div>Founder, Conatus Bharat Education Pvt. Ltd.</div>
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
        <p className="text-sm text-ink/60">
          We'll acknowledge complaints within 24 hours and resolve them
          within 15 days.
        </p>
      </Section>
    </LegalLayout>
  );
}
