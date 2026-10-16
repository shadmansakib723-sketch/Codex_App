/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        navigation: ["PoppinsMedium"],
      },
      colors: {
        artwork: "#DFE7E4",
        panel: "#FAFAF8",
        navigation: {
          active: "#25272D",
          inactive: "#6F7471",
          border: "#EFF0EE",
          selected: "#F1F2F1",
        },
      },
    },
  },
  plugins: [],
};
