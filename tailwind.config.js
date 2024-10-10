/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // App dizinindeki tüm bileşenler
    "./src/components/**/*.{js,ts,jsx,tsx}", // Components dizinindeki tüm bileşenler
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
