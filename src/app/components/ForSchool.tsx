"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { School, BrainCircuit } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const ForSchool = () => {
    return (
        <motion.section
            className="bg-gray-950 text-white py-24 px-6 flex items-center justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto text-center space-y-10">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-white flex items-center justify-center"
                     initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                   <School className="mr-3 w-8 h-8 text-white"/> Built for the Brave
                </motion.h2>
                <motion.p
                    className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed"
                     initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Conatus Bharat is not for the conventional. We work with schools, educators, and communities who believe in transformation — not tradition.
                </motion.p>

                <motion.div
                    className="flex justify-center"
                     initial={{ opacity: 0, scale: 0.8}}
                    animate={{ opacity: 1, scale:1 }}
                    transition={{ delay: 0.6, duration: 0.6, type: 'spring', stiffness: 100 }}
                >
                    <a
                        href="/contact"
                        className="px-8 py-3 rounded-full bg-[#001F3F] text-white font-medium hover:bg-[#0a2458] transition-colors duration-300
                        shadow-lg hover:shadow-xl flex items-center"
                    >
                        <BrainCircuit className="mr-2 w-5 h-5 text-white"/>
                        Let’s Build the Future Together
                    </a>
                </motion.div>
                 <div className="border-b border-white/10 w-full mt-8"></div>
            </div>
        </motion.section>
    );
};

export default ForSchool;
