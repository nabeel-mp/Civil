/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2a2a2a',
        'dark-light': '#3a3a3a',
        'accent-gold': '#E8981E',
        'accent-gold-light': '#F5A623',
        'text-light': '#e5e5e5',
        'text-muted': '#b8b8b8',
        'engineer-blue': '#1e3a8a',
        'engineer-gold': '#d97706',
      },
      backgroundColor: {
        'dark': '#2a2a2a',
      },
      textColor: {
        'gold': '#E8981E',
      }
    },
  },
  plugins: [],
}
