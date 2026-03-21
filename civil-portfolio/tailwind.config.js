/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'engineer-blue': '#1e3a8a',
        'engineer-gold': '#d97706',
      }
    },
  },
  plugins: [],
}