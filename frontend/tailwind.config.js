/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Color1: "#072933",
        Color2: "#EAECFF",
        Color3: "#46AF72",
        Color4: "#757C95",
        Color5: "#DCE1E9",
        Color6: "#E5E5E5",
      },
      screens: {
        max1100: { max: "1100px" },
        max1000: { max: "1000px" },
        max800: { max: "800px" },
        max500: { max: "500px" },
        max400: { max: "400px" },
        max300: { max: "300px" },
      },
    },
  },
  plugins: [],
};
