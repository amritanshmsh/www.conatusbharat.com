import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">Conatus Bharat</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Enabling intelligent, personalized, and adaptive learning for the schools of tomorrow.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/wonder" className="hover:text-white">Wonder (Adaptive Learning)</a></li>
            <li><a href="/lumen" className="hover:text-white">Lumen Hub (School ERP)</a></li>
            <li><a href="/eleven" className="hover:text-white">Eleven (Media & Branding)</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Our Story</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white">Who We Are</a></li>
            <li><a href="/journey" className="hover:text-white">Our Journey</a></li>
            <li><a href="/socials" className="hover:text-white">Socials</a></li>
            <li><a href="/blog" className="hover:text-white">Insights & Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <p className="text-sm text-gray-400">
            Have questions or want to collaborate? Reach out to us at{" "}
            <a
              href={`mailto:contact@conatusbharat.com?subject=Inquiry about Conatus Bharat Solutions&body=Hello Team Conatus Bharat,%0D%0A%0D%0AI am interested in learning more about your services for schools. Here are some details about my institution:%0D%0A%0D%0A- Name of the Institution: %0D%0A- Name of the Person: %0D%0A- Position in the Institution: %0D%0A- Email: %0D%0A- Contact Number: %0D%0A%0D%0APlease get back to me at your earliest convenience.%0D%0A%0D%0AThank you!`}
              className="text-blue-400 hover:underline"
            >
              contact@conatusbharat.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Copyright and Legal Links */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400 space-y-2">
        <div>
          <a href="/T&C" className="hover:text-white transition">Terms and Conditions</a>
          <span className="mx-2">|</span>
          <a href="/PrivacyPolicy" className="hover:text-white transition">Privacy Policy</a>
        </div>
        <div className="text-gray-500">
          © {new Date().getFullYear()} Conatus Bharat Education Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;