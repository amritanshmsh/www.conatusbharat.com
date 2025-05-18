

'use client';

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-5xl font-semibold mb-10 text-center">School Contact Form</h1>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full max-w-2xl space-y-6 bg-[#0d0d0d] p-8 rounded-lg border border-white/10 shadow"
      >
        <input type="hidden" name="access_key" value="92cc1615-c091-442f-adb8-6947f333314b" />

        <div>
          <label className="block mb-1 text-sm font-medium">School Name</label>
          <input
            type="text"
            name="school_name"
            required
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Principal/Contact Person Name</label>
          <input
            type="text"
            name="contact_person"
            required
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">School Location</label>
          <input
            type="text"
            name="location"
            required
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
            placeholder="How can we help your school?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;