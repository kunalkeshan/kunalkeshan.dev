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
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        nunitoSans: 'var(--font-nunito-sans)',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        '3d-small': '2px 2px 0 0 rgb(11, 11, 11)',
        '3d-small-reverse': '-2px 2px 0 0 rgb(11, 11, 11)',
        '3d-small-white': '2px 2px 0 0 #F1F0EE',
        '3d': '8px 8px 0 0 rgb(11, 11, 11)',
        '3d-reverse': '-8px 8px 0 0 rgb(11, 11, 11)',
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
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
