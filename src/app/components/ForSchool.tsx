import React, { Fragment } from 'react';

const ForSchool = () => {
  return (
    <section id="for-schools" className="py-16 px-6 md:px-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with Conatus Bharat?</h2>
        <p className="text-gray-600 mb-10">
          We bring AI-driven adaptive learning and a unified ERP solution to transform your school’s educational experience.
        </p>

        {/* How It Works */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <div className="flex items-center justify-between">
            {[
              'Schedule a Demo',
              'Onboarding',
              'Implementation',
              'Support & Growth'
            ].map((step, idx) => (
              <Fragment key={idx}>
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full mb-2">
                    {idx + 1}
                  </div>
                  <p className="text-gray-600 text-sm">{step}</p>
                </div>
                {idx < 3 && <div className="flex-1 h-1 bg-gray-300 mx-2"></div>}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Request a Demo Form */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Request a Demo</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="school"
              placeholder="School Name"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 md:col-span-2"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Additional Details (optional)"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 md:col-span-2"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForSchool;