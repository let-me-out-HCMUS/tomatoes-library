/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        palatino: ["Palatino", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
  darkMode: "class"
}
