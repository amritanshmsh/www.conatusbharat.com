"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Rocket, DollarSign, BarChart3 } from 'lucide-react';
import { useTheme } from 'next-themes';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhySchools = () => {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';

    const features = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Personalized Education",
            description: "Adaptive learning paths tailored to each student's needs"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Less Teacher Workload",
            description: "Automated assessments and intelligent insights save time"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Easy Onboarding",
            description: "Seamless integration with minimal setup required"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Affordable",
            description: "Cost-effective solutions that fit your budget"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Data-Driven Insights",
            description: "Real-time analytics to track progress and outcomes"
        }
    ];

    return (
        <motion.section
            className={`${isLightMode ? 'bg-gray-50 text-black' : 'bg-gray-950 text-white'} py-24 px-6`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
                        Why Schools <span className={`${isLightMode ? 'text-gray-800' : 'text-gray-300'}`}>Choose Us</span>
                    </h2>
                    <p className={`text-lg ${isLightMode ? 'text-gray-600' : 'text-gray-400'} max-w-2xl mx-auto`}>
                        Empowering educational institutions with innovative solutions
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-xl ${isLightMode ? 'bg-white hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'} shadow-lg hover:shadow-xl transition-all duration-300 border ${isLightMode ? 'border-gray-200' : 'border-gray-800'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={`${isLightMode ? 'text-gray-800' : 'text-gray-300'} mb-4`}>
                                {feature.icon}
                            </div>
                            <h3 className={`text-xl font-semibold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>
                                {feature.title}
                            </h3>
                            <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'} text-sm`}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <a
                        href="/contact"
                        className={`px-8 py-4 rounded-full ${isLightMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'} font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
                    >
                        Book a Demo
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WhySchools;
