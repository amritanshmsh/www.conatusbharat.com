'use client'
import { useTheme } from 'next-themes';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function FinalSection() {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  return (
    <section className={`relative ${isLightMode ? 'bg-white text-gray-800' : 'bg-black text-white'} py-24 px-6 overflow-hidden`}>
      <div className={`absolute inset-0 ${isLightMode ? 'bg-[radial-gradient(#0000000c_1px,transparent_1px)]' : 'bg-[radial-gradient(#ffffff0c_1px,transparent_1px)]'} [background-size:24px_24px] pointer-events-none z-0`} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 text-left space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className={isLightMode ? 'text-gray-500' : 'text-gray-300'}>This Is Just </span>
          <span className={isLightMode ? 'text-black' : 'text-white'}>the Beginning</span>
        </h2>
        <p className={`text-lg ${isLightMode ? 'text-gray-500' : 'text-gray-300'}`}>
          Conatus Bharat is more than a launch — it's a promise. To rethink what learning means.
          To build tools that truly serve children. And to partner with those who dare to believe in better.
        </p>
        <p className={`text-sm mt-6 ${isLightMode ? 'text-gray-400' : 'text-gray-400'}`}>
          Ready to bring Conatus Bharat to your school? <a href="/contact" className="underline hover:text-white">Let’s build a future together</a>.
        </p>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-px ${isLightMode ? 'bg-gray-300' : 'bg-gray-800'}`} />
    </section>
  );
}