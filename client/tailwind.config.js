/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        palatino: ["Palatino", "sans-serif"],
      },
      backgroundImage: {
        home: "url(https://firebasestorage.googleapis.com/v0/b/foodorder-842d1.appspot.com/o/images%2Fscale.jpg?alt=media&token=6f0e707b-ef19-4533-9729-d038dcbe7658)",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
  darkMode: "class",
};
