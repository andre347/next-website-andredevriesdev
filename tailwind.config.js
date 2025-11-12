const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'class' for manual toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    // typography: {
    //   default: {
    //     css: {
    //       a: {
    //         color: "#dd6b20",
    //         "&hover": {
    //           color: "#9c4221",
    //         },
    //       },
    //     },
    //   },
    // },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
