"use client";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500); // always shows for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#00b8ea] transition-all duration-700 transform ${
        !showLoader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <h1 className="text-white text-3xl md:text-5xl font-light tracking-wide animate-fade-in">
        Conatus Bharat
      </h1>
    </div>
  );
}