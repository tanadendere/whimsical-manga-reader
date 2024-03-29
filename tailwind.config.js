/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    `./index.html`,
    `./src/**/*.{html,js,jsx,ts,tsx}`,
    `./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    fontFamily: {
      chewy: ["Chewy", "system-ui"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
