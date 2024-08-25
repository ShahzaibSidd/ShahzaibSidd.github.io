/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {urbanist: ['Urbanist']},
      colors: {'sea-blue': '#00A3FF'}
    },
  },
  plugins: [],
}
