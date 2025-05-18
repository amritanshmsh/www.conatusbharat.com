'use client'

import React from 'react'
import Link from 'next/link'

const WafflePage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Waffle by Conatus Bharat</h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">
          A student-powered network to hack how we believe in ourselves, learn with freedom, and launch what matters.
        </p>
        <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Join the Movement
        </Link>
      </section>

      {/* Visual Section */}
      <section className="px-6 py-24 bg-[#0a0a0a] text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Start a Club. Build Projects. Learn Out Loud.</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Whether you're a builder, coder, or curious creator — Waffle is your launchpad to build with others. 
          Access resources, connect with mentors, and lead your own school tech revolution.
        </p>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#111] px-6 py-12 text-center">
        <h3 className="text-xl sm:text-2xl mb-4">Curious to learn more?</h3>
        <Link href="/contact" className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Talk to Us →
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center px-6 py-12">
        © {new Date().getFullYear()} Conatus Bharat · Built with love for students.
      </footer>
    </div>
  )
}

export default WafflePage