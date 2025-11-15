"use client";
import mentorsData from "@/app/data/mentors.json";
import NextImage from "next/image";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { useTheme } from "next-themes";

function Mentor() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen flex flex-col items-center py-24 px-6 md:px-12`}>

      {/* Mentor Section Title */}
      <div id="mentor" className="text-center mb-16">
        <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
          Our <span className={`${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>Mentors</span> ✨
        </h2>
        <p className={`text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-400'} max-w-2xl mx-auto`}>
          Meet the visionaries guiding our journey
        </p>
      </div>

      {/* Mentor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center w-full max-w-7xl">
        {mentorsData.map((mentor, index) => (
          <div
            key={index}
            className={`group relative flex flex-col items-center p-8 rounded-2xl ${isLightMode ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'} shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-sm mx-auto border ${isLightMode ? 'border-gray-200' : 'border-gray-800'}`}
          >
            {/* Mentor Image */}
            <div className={`relative w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full border-4 ${isLightMode ? 'border-gray-300' : 'border-gray-700'} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <NextImage
                height="144"
                width="144"
                alt={mentor.name}
                src={mentor.image}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Mentor Name & Role */}
            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isLightMode ? 'text-gray-900' : 'text-white'} text-center`}>
              {mentor.name}
            </h3>
            <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} text-sm font-semibold text-center mb-4 uppercase tracking-wide`}>
              {mentor.post}
            </p>

            {/* Mentor Description */}
            <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-300'} text-sm text-center leading-relaxed px-2`}>
              {mentor.about}
            </p>

            {/* Social Icons */}
            <div className="flex mt-6">
              {mentor.socials.linkedin && (
                <a
                  href={mentor.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isLightMode ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'} transition-colors duration-200 transform hover:scale-125`}
                >
                  <AiFillLinkedin size={28} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Back Button at Bottom */}
      <div className="w-full max-w-7xl mt-16">
        <Link href="/">
          <button className={`flex items-center gap-2 ${isLightMode ? 'text-black border-black hover:bg-black hover:text-white' : 'text-white border-white hover:bg-white hover:text-black'} border px-6 py-3 rounded-lg transition-all duration-300 font-medium`}>
            <FaArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Mentor;