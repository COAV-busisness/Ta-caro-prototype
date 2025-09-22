/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        tacaro: {
          red: '#D91E2E',
          yellow: '#FFD700',
          'gray-light': '#f5f5f5',
          gray: '#e0e0e0',
          'gray-dark': '#333333'
        }
      }
    },
  },
  plugins: [],
}
