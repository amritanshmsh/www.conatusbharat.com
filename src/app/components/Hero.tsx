"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <section className={`relative ${isLightMode ? "bg-white text-black" : "bg-black text-white"}`}>
      <Image
        src="/assets/_.jpeg"
        alt="Background Illustration"
        fill
        className={`absolute inset-0 object-cover pointer-events-none ${isLightMode ? "opacity-20" : "opacity-10"}`}
      />
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* ─── Left copy ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bebas-neue leading-tight mx-auto">
            <strong className="font-semibold">We live in 2025.</strong><br />
            But classrooms still feel like <strong className="font-semibold">1970</strong>.<br />
            The world moves faster than schools can adapt.<br />
            Kids are taught to memorize — <strong className="font-semibold">not to think</strong>.<br />
            It's time we changed the{" "}
            <a
              href="/story"
              className="inline-block mt-4 px-4 py-1 rounded-md bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              story
            </a>.
          </h1>
        </motion.div>
        <div></div>
        </div>
      </div>
    </section>
  );
}