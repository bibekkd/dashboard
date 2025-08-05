// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',         // Required for Next.js App Router
      './pages/**/*.{js,ts,jsx,tsx}',       // If using pages directory
      './components/**/*.{js,ts,jsx,tsx}',  // Your components
    ],
    theme: {
      extend: {
        colors: {
          'lightOrange' : '#FFF7E8',
          'lightGray' : '#7D7D7D',
          'darkOrange' : '#734A00',
          'orange' : '#FFA500',
        },
        fontFamily: {
          archivo: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
          inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
          sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  