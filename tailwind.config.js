/** @type {import('tailwindcss').Config} */
const path = require("path");
module.exports = {
    content: [
      path.join(__dirname, 'src/pages/**/*.{js,ts,jsx,tsx,mdx}'),
      path.join(__dirname, 'src/components/**/*.{js,ts,jsx,tsx,mdx}'),
      path.join(__dirname, 'src/app/**/*.{js,ts,jsx,tsx,mdx}'),
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            // Ringg-like blue
            DEFAULT: '#1F6FFF',
            dark: '#0B4DFF',
            light: '#EAF1FF',
            50: '#F2F7FF',
            100: '#E7F0FF',
            200: '#CFE0FF',
            500: '#1F6FFF',
            600: '#145CFF',
            700: '#0B4DFF',
          },
          accent: {
            // Ringg uses a subtle green highlight/dot
            DEFAULT: '#22C55E',
            light: '#DCFCE7',
            hover: '#16A34A',
          },
          foreground: {
            DEFAULT: '#0F172A',
            muted: '#475569',
            subtle: '#94A3B8',
          },
          surface: '#FFFFFF',
          'bg-page': '#F6F8FC',
          border: {
            DEFAULT: '#E2E8F0',
            light: '#F1F5F9',
          },
        },
        fontFamily: {
          // Ringg-like typography (clean SaaS)
          display: ['"Inter"', 'sans-serif'],
          body: ['"Inter"', 'sans-serif'],
          sans: ['"Inter"', 'sans-serif'],
        },
        fontSize: {
          'hero': 'clamp(2.2rem, 5vw, 3.5rem)',
          'section': 'clamp(1.75rem, 3vw, 2.5rem)',
        },
        borderRadius: {
          '2xl': '1rem',
          '3xl': '1.5rem',
          '4xl': '2rem',
        },
        boxShadow: {
          'card': '0 10px 35px rgba(15, 23, 42, 0.06)',
          'card-hover': '0 24px 70px rgba(31, 111, 255, 0.14)',
          'primary': '0 10px 30px rgba(31, 111, 255, 0.32)',
          'accent': '0 10px 30px rgba(34, 197, 94, 0.26)',
          'nav': '0 10px 30px rgba(15, 23, 42, 0.10)',
        },
        animation: {
          'slideInBlur': 'slideInBlur 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
          'float': 'float 3s ease-in-out infinite',
          'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
          'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
          'modal-in': 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
          'hero-word': 'heroWord 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
        },
        keyframes: {
          slideInBlur: {
            '0%': { opacity: '0', transform: 'translateY(28px)', filter: 'blur(4px)' },
            '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-8px)' },
          },
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          modalIn: {
            '0%': { opacity: '0', transform: 'scale(0.95) translateY(12px)' },
            '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          },
          heroWord: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  }