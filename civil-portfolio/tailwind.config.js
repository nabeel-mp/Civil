/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-dark': '#000000',
        'white-light': '#FFFFFF',
        'gray-light': '#F5F5F5',
        'gray-border': '#E5E5E5',
        'text-dark': '#1a1a1a',
        'text-muted': '#666666',
        'engineer-blue': '#1e3a8a',
        'engineer-gold': '#d97706',
      },
    },
  },
  plugins: [],
}
