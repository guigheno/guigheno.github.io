/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf6f0',
          100: '#faead8',
          200: '#f5d5b0',
          300: '#edb97e',
          400: '#e5a05e',
          500: '#d98a42',
          600: '#c47230',
          700: '#a35a28',
          800: '#854a26',
          900: '#6d3e23',
          950: '#3a1e10',
        },
        accent: {
          50: '#f0faf4',
          100: '#dcf5e5',
          200: '#bceace',
          300: '#8dd8ac',
          400: '#5ec089',
          500: '#3da86d',
          600: '#2d8a57',
          700: '#266e47',
          800: '#22583b',
          900: '#1e4933',
          950: '#0d291c',
        },
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d0',
          300: '#ddc9ae',
          400: '#ccac8a',
          500: '#c0966e',
          600: '#b38362',
          700: '#966c53',
          800: '#7a5848',
          900: '#64493d',
          950: '#34241f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
