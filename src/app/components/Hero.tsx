"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* ─── Left copy ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            One Platform for Every School Need.
            <span className="block text-[#00b8ea]">
              ERP. Adaptive Learning. Seamless Growth.
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-md text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Conatus Bharat unifies school management, personalized learning,
            and operational efficiency—empowering institutions and students to thrive.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00b8ea] px-8 py-3 text-sm font-semibold text-white shadow hover:bg-[#00a0c9]"
            >
              Book a Demo
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-[#00b8ea] px-8 py-3 text-sm font-semibold text-[#00b8ea] hover:bg-[#e6faff]"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right image block ───────────────────────────────── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/images/conatus-hero.jpg"
            alt="Conatus Bharat in action"
            width={700}
            height={800}
            priority
            className="h-80 md:h-96 w-full rounded-xl object-cover"
          />

          {/* Badge 1 */}
          <motion.div
            className="absolute left-4 top-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm max-w-[220px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xs font-semibold text-gray-700">Built for Indian Schools</p>
            <p className="mt-1 text-xs text-gray-600">
              Tailored tools for every stage—administration to student success.
            </p>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            className="absolute right-4 bottom-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm max-w-[220px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-xs font-semibold text-gray-700">Adaptive Learning Engine</p>
            <p className="mt-1 text-xs text-gray-600">
              Smart assessments and content for every learner’s path.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}