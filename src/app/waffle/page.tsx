'use client'

import React from 'react'
import Link from 'next/link'

const WafflePage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/assets/original-8712b05e2f6dff80d13d399db690d5a5.png')" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] z-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Waffle by Conatus Bharat</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">
            Waffle is an experimental lab for student curiosity — where tech, art, leadership, and community come together to create something new.
          </p>
          <span className="bg-white text-black px-6 py-3 rounded-full font-medium cursor-default">
            Beta Preview
          </span>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 pt-10 pb-20 text-left max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Not Just a Coding Club</h2>
        <p className="text-gray-400 text-lg mb-4">
          Waffle is a space for students to build anything — apps, films, startups, research, even movements.
          It’s about following curiosity, not curriculum. It’s about building community, not competition.
        </p>
        <p className="text-gray-400 text-lg">
          Whether you're an artist, scientist, gamer, or dreamer — Waffle is your tribe.
        </p>
      </section>

      {/* Tracks */}
      <section className="px-6 py-20 bg-[#0a0a0a]">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-10 text-center">Explore the Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Tech & Innovation', desc: 'Code games, build websites, explore AI, and invent your own tools.' },
            { title: 'Business & Startups', desc: 'Launch a brand, pitch ideas, learn money management and markets.' },
            { title: 'Creative & Culture', desc: 'Write zines, direct short films, design posters, make music.' },
            { title: 'Social Change', desc: 'Lead school campaigns, design sustainable solutions, take action.' },
            { title: 'Science & Research', desc: 'Run experiments, decode the brain, tinker with hardware.' },
            { title: 'Health & Wellness', desc: 'Build wellness apps, lead clubs, promote mental health.' },
          ].map((track, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-gray-400">{track.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Coming Soon</h2>
        <p className="text-lg text-gray-400">
          Waffle is currently in its early stages. We’re building something bold — a student-powered community to create, question, and launch. This page will grow with the community. Stay tuned.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#111] px-6 py-20 text-center">
        <h3 className="text-2xl sm:text-3xl mb-6">This is just the beginning.</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-4">
          We’re still building the foundation — not launching a club, but shaping a community. This page is your front-row seat to our evolving experiment.
        </p>
        <span className="inline-block border border-white text-white px-6 py-3 rounded-full font-medium cursor-default">
          Stay tuned
        </span>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center px-6 py-12">
        © {new Date().getFullYear()} Conatus Bharat · Waffle is in beta. Everything you need is right here.
      </footer>
    </div>
  )
}

export default WafflePage