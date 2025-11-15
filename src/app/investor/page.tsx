'use client';

import React from 'react';

const InvestorContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-5xl font-semibold mb-4 text-center">Investor Contact</h1>
      <p className="text-gray-400 text-center mb-10 max-w-2xl">
        Join us in transforming education. We're looking for visionary investors who share our mission to revolutionize learning.
      </p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full max-w-2xl space-y-6 bg-[#0d0d0d] p-8 rounded-lg border border-white/10 shadow"
      >
        <input type="hidden" name="access_key" value="9ad00412-5324-47fd-95f3-92d34809e3a3" />
        <input type="hidden" name="subject" value="Investor Inquiry" />

        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
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
          <label className="block mb-1 text-sm font-medium">Organization/Firm</label>
          <input
            type="text"
            name="organization"
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Investment Interest</label>
          <select
            name="investment_interest"
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
          >
            <option value="">Select an option</option>
            <option value="equity">Equity Investment</option>
            <option value="partnership">Strategic Partnership</option>
            <option value="advisory">Advisory Role</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-2 bg-black border border-white/20 rounded-md text-white focus:outline-none focus:border-white"
            placeholder="Tell us about your investment interests and vision..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition w-full"
        >
          Submit Inquiry
        </button>
      </form>

      <div className="mt-8 text-center text-gray-400">
        <p>For urgent matters, reach us at <a href="mailto:conatusbharat@gmail.com" className="text-white hover:underline">conatusbharat@gmail.com</a></p>
      </div>
    </div>
  );
};

export default InvestorContactPage;
