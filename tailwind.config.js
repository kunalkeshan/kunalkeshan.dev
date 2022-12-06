/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23272a",
        secondary: "#2c2f33",
        main: "#ffa500",
      },
    },
  },
  plugins: [],
};
