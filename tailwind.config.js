/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-hover': 'linear-gradient(to right bottom, #243ea1, #283aa2, #2d36a3, #3231a3, #372ca3, #3f2ba4, #462aa6, #4d28a7, #572baa, #602eae, #6932b1, #7235b4)',
      },
    },
  },
  plugins: [],
}

