/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        custom_black_1: "rgb(38, 38, 38,1)",
        custom_black_2: "rgb(26, 29, 32, 1)",
        custom_gray_1: "rgba(44, 48, 52, 1)",
        custom_gray_2: "rgba(132, 139, 141, 1)",
        custom_white_1: "rgba(223, 223, 223, 1)",
        custom_red_1: "rgba(240, 48, 51, 1)",
        grey_font_color: "rgb(118, 118, 118, 1)",
      },
    },
    screens: {
      xs: "0px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
