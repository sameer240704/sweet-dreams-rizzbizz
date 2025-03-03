/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "	#EEF4FC",
          100: "#DCE7F8",
          200: "#B8CFF1",
          300: "#94B7EA",
          400: "#7CA3DA",
          500: "#5E89C8",
          600: "#4A6FA7",
          700: "#375485",
          800: "#253A64",
          900: "#132042"
        }
      }
    },
  },
  plugins: [],
};
