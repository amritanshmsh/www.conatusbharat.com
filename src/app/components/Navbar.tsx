import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center text-2xl font-bold">
              Conatus Bharat<span className="text-[#00b8ea]">.</span>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:border-[#00b8ea] hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:border-[#00b8ea] hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:border-[#00b8ea] hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Services
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00b8ea] hover:bg-[#0096cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00b8ea]"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
