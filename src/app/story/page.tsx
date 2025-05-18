"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaUsers, FaSchool } from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const zoomIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StoryPage() {
  return (
    <motion.section
      className="bg-[#0B0F24] text-white px-6 py-24 relative overflow-hidden"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-32">
        {/* Section 1: Story */}
        <motion.div className="grid md:grid-cols-1 gap-16" variants={fadeInUp}>
          <div className="text-center md:text-left">
            <motion.h2
              className="font-bebas-neue text-5xl md:text-7xl uppercase mb-10 tracking-wide text-shadow-lg"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              The <span className="text-slate-400">Story</span>
            </motion.h2>
            <motion.div className="space-y-8" variants={fadeInUp} transition={{ delay: 0.4 }}>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                The story of Conatus Bharat is the story of <strong className="text-white">countless children</strong> who were steered into traditional career paths,
                not because of their potential, but due to a lack of understanding of their unique talents and passions.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                It was born from the belief that every child is inherently gifted, but not everyone is meant to excel at everything.
                Recognizing this, <strong className="text-white">Conatus Bharat was created to help children discover their true potential</strong>,
                explore unconventional paths, and become exceptionally good at what they are naturally inclined toward.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                This realization—that <strong className="text-white">talent needs direction, not conformity</strong>—led to the formation of Conatus Bharat,
                empowering students and schools to break free from traditional molds and truly own tomorrow.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-gray-800 via-white to-gray-800 bg-opacity-20"></div>

        {/* Section 2: Tagline Banner */}
        <motion.div className="w-full text-center py-16 rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-md shadow-lg" variants={zoomIn}>
          <motion.h2
            className="font-bebas-neue text-6xl md:text-8xl uppercase tracking-wide text-white drop-shadow-xl animate-pulse"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Own <span className="text-gray-200">Tomorrow</span>
          </motion.h2>
          <motion.p className="mt-4 text-lg text-gray-300" variants={fadeInUp} transition={{ delay: 0.2 }}>
            More than a tagline, it's the future we're building, together.
          </motion.p>
        </motion.div>

        {/* Divider with Icons */}
        <div className="flex items-center justify-center space-x-4 py-8">
          <div className="h-[2px] w-1/4 bg-gray-800 bg-opacity-50"></div>
          <FaLightbulb className="text-gray-400 text-xl" />
          <FaUsers className="text-gray-400 text-xl" />
          <FaRocket className="text-gray-400 text-xl" />
          <FaSchool className="text-gray-400 text-xl" />
          <div className="h-[2px] w-1/4 bg-gray-800 bg-opacity-50"></div>
        </div>

        {/* Section 3: Mission */}
        <motion.div className="grid md:grid-cols-2 gap-20" variants={fadeInUp} transition={{ delay: 0.3 }}>
          <div className="p-8 rounded-lg bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaUsers className="mr-2" /> For Students
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              We are dedicated to empowering children by providing them with the tools, insights, and encouragement
              to discover their unique talents and chart their own extraordinary paths. Our mission is to instill
              the confidence to not just dream, but to actively shape their futures.
            </p>
          </div>
          <div className="p-8 rounded-lg bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaSchool className="mr-2" /> For Schools
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              We partner with educational institutions to foster environments that embrace individuality and future-forward learning.
              Our goal is to help schools evolve into dynamic centers that not only recognize diverse potentials but also
              equip students with the skills needed to thrive in tomorrow's world.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}