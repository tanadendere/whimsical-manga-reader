/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    `./index.html`,
    `./src/**/*.{html,js,jsx,ts,tsx}`,
    `./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    colors: {
      "ut-orange": "#fb8500",
      "selective-yellow": "#ffb703",
      "prussian-blue": "#023047",
      "blue-green": "#219ebc",
      "sky-blue": "#8ecae6",
    },
    fontFamily: {
      chewy: ["Chewy", "system-ui"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
