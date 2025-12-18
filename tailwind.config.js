/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        robinter: ['"Roboto Serif"', 'Inter', 'sans-serif'],
      },  
    },
  },
  plugins: [],
}
