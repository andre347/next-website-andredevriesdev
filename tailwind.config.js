const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // purge: {
  //   mode: "all",
  //   content: ["./pages/**/*.{js}", "./next.config.js"],
  // },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};
