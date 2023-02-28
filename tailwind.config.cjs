/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
          'portrait': {
              'raw': '(orientation: portrait)'
          },
          'landscape': {
              'raw': '(orientation: landscape)'
          },
      },
    },
  },
  plugins: [],
}
