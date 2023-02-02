/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        '3d': '8px 8px 0 0 rgb(11, 11, 11)',
        '3d-hover': '10px 10px 0 0 rgb(11, 11, 11)',
      },
      colors: {
        themes: {
          bg_primary: "#FFFFFF",
          bg_secondary: "#F1F0EE",
          txt_primary: "#0B0B0B",
          txt_secondary: "#393939",
        },
        portfolio: {
          main: "#ffa500",
          accent: "#1C92FF"
        },
        codelanceDevs: "#00e07b",
      },
    },
  },
  plugins: [],
};
