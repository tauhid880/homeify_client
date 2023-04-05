/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#810CA8",
        secondary: "#313D4D",
        accent: "#d2d2d240",
        background: "#0201010d",
      },
    },
  },
  plugins: [require("daisyui")],
};
