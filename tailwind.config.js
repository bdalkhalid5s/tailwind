/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'main_font': ['Open Sans'],
    },
    extend: {
      maxWidth: {
        container: '1320px',
      }
    },
  },
  plugins: [],
}