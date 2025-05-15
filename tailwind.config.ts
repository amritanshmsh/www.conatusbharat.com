import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'orbit': 'orbit 15s linear infinite',
        'orbit-slow': 'orbit 30s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'bounce-subtle': 'bounce 3s ease-in-out infinite',
        'fade-in': 'fadeIn 2s ease-in-out',
        'wiggle': 'wiggle 0.2s ease-in-out infinite alternate',
        'text-gradient': 'textGradient 10s ease infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(3px)' },
        },
        textGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  variants: {
    extend: {
      rotate: ['group-open'],
    },
  },
};

export default config;
