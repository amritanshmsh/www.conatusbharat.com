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
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          Our <span className="text-purple">Mentors ✨</span>
        </h2>
      </div>

      {/* Mentor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-3 xl:grid-cols-3 gap-10 md:gap-14 justify-center w-full max-w-7xl">
        {mentorsData.map((mentor, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center p-6 rounded-xl ${isLightMode ? 'bg-gray-100' : 'bg-[#0d0d0d]'} shadow-lg transform transition-all hover:scale-105 w-[21rem] mx-auto`}
          >
            {/* Mentor Image */}
            <div className={`relative w-44 h-44 md:w-52 md:h-52 overflow-hidden rounded-full border-2 ${isLightMode ? 'border-blue-500' : 'border-white'} shadow-md`}>
              <NextImage
                height="80"
                width="80"
                alt="Avatar"
                src={mentor.image}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Mentor Name & Role */}
            <h3 className="mt-5 text-lg md:text-xl font-semibold">
              {mentor.name}
            </h3>
            <p className={`${isLightMode ? 'text-gray-500' : 'text-gray-400'} text-sm text-center px-4`}>
              {mentor.post}
            </p>

            {/* Mentor Description */}
            <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-300'} font-normal text-sm text-center my-4`}>
              {mentor.about}
            </p>

            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              {mentor.socials.linkedin && (
                <a
                  href={mentor.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isLightMode ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white'} transition`}
                >
                  <AiFillLinkedin size={26} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Back Button at Bottom */}
      <div className="w-full max-w-7xl mt-16">
        <Link href="/">
          <button className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
            <FaArrowLeft size={18} />
            <span>Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Mentor;