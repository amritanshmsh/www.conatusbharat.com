import React from 'react';

const ForSchool = () => {
  return (
    <section className="bg-white text-[#001F3F] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Built for the Brave</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Conatus Bharat is not for the conventional. We work with schools, educators, and communities who believe in transformation — not tradition.
        </p>
        
        <div className="flex justify-center">
          <a href="/contact" className="px-6 py-3 rounded-md bg-[#001F3F] text-white font-medium hover:bg-[#0a2458] transition">
            Let’s Build the Future Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForSchool;