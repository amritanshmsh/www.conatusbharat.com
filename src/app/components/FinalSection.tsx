

export default function FinalSection() {
  return (
    <section className="relative bg-[#0B0F24] text-white py-24 px-6 overflow-hidden">
      <img
        src="/assets/Logo_Conatus_dark.png"
        alt="Conatus Logo Background"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5 w-[60%] max-w-[600px] pointer-events-none"
      />
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">This Is Just the Beginning</h2>
        <p className="text-lg text-gray-300">
          Conatus Bharat is more than a launch — it's a promise. To rethink what learning means.
          To build tools that truly serve children. And to partner with those who dare to believe in better.
        </p>
        <a
          href="/story"
          className="inline-block mt-4 px-6 py-3 rounded-md bg-white text-[#001F3F] font-semibold hover:bg-gray-200 transition"
        >
          Read Our Story
        </a>
      </div>
    </section>
  );
}