/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        artwork: "#DFE7E4",
        panel: "#FAFAF8",
        navigation: {
          active: "#245C46",
          inactive: "#626963",
          border: "#E5E8E5",
        },
      },
    },
  },
  plugins: [],
};
