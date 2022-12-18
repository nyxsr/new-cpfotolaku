
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content:{
        'quotes' : 'url("./src/assets/quotes.svg")'
      }
    },
  },
  plugins: [],
}
