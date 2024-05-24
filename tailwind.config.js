/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        newBlack: '#151515',
        newvoilet: '#494c99',
        darkgray: '#242424',
        gray: '#d9d9d9'
      },
      fontFamily: {
        custom: ['Hanken Grotesk', 'sans-serif'],
        signature: ['Fasthand', 'cursive']
      },
    },
  },
  plugins: [],
}

