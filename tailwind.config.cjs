/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-soft-orange': 'hsl(35, 77%, 62%)',
        'c-soft-red': 'hsl(5, 85%, 63%)',
        'c-off-white': 'hsl(36, 100%, 99%)',
        'c-dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'c-very-dark-blue': 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        desk: '375px',
      },
    },
  },
  plugins: [],
};
