'use client';
import React from 'react';

const CareersPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Careers</h1>
      <p className="text-gray-400 text-center max-w-md">
        There are currently no open positions. If you're interested in working with us, feel free to reach out at <a href="mailto:info@conatusbharat.com" className="underline hover:text-white">info@conatusbharat.com</a>.
      </p>
    </div>
  );
};

export default CareersPage;