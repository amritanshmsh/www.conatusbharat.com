

'use client';

import React from 'react';

const PressPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Press & Media</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Conatus Bharat</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Conatus Bharat is a movement to reinvent how student learns. We're not just an EdTech company — we're a collective of thinkers, builders, and educators committed to helping students own their future. From adaptive assessments to AI-powered learning journeys, we build products that empower schools and learners alike.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Press Contact</h2>
          <p className="text-gray-400 text-sm">
            For media inquiries, interviews, or speaking opportunities, please reach out to:
            <br />
         a   <a href="mailto:conatusbharat@gmail.com" className="underline hover:text-white">
              conatusbharat@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Media Resources</h2>
          <p className="text-gray-400 text-sm">
            Download our <span className="underline">media kit</span>, logos, and founder bios to include in your stories. (Coming soon)
          </p>
        </section>
      </div>
    </div>
  );
};

export default PressPage;