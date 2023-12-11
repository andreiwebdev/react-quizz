/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        error: "#EE5454",
        white: "#FFFFFF",
        lightBlue: "#ABC1E1",
        light: {
          primary: "#A729F5",
          background: "#F4F6FA",
          text: "#3B4D66",
          textDark: "#313E51",
          textLight: "#626C7F",
        },
        dark: {
          primary: "#A729F5",
          background: "##313E51",
          text: "#F4F6FA",
          textDark: "#F4F6FA",
          textLight: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
