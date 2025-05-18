"use client"
import React from 'react';
import { BookOpen } from 'lucide-react';
import { useTheme } from 'next-themes';

const Foundernote = () => {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';

    return (
        <section className={`${isLightMode ? 'bg-white text-gray-900' : 'bg-black text-white'} py-20 px-4 sm:px-6`}>
            <div className="max-w-6xl mx-auto px-4 text-left space-y-6">
                <p className={`text-lg sm:text-xl font-normal leading-relaxed ${isLightMode ? 'text-gray-800' : 'text-white'}`}>
                    “Race ko choro, give <strong className="font-semibold">dreams</strong> their own <strong className="font-semibold">sky</strong> — woh wahin <strong className="font-semibold">belong</strong> karte hain.”
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                    — Dr. Preeti Mishra
                </p>
                <div className={`${isLightMode ? 'border-gray-200' : 'border-gray-700'} border-b w-full mt-6`}></div>
            </div>
        </section>
    );
};

export default Foundernote;
