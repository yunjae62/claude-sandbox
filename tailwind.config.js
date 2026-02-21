/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4357ad",
          light: "#5569c4",
          dark: "#3447a0",
        },
        secondary: {
          DEFAULT: "#d4b483",
          light: "#e0c9a0",
          dark: "#c09a65",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
