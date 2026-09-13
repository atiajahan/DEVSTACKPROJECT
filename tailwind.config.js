/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // এই লাইনটি না থাকলে Tailwind এর কোনো ক্লাস কাজ করবে না
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}