/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'md': { "max": "1110px" },
        'sm': { "max": "900px" },
        'xs': { "max": "700px" }
      }
    },
  },
  plugins: [],
}

