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
    typography: {
      default: {
        css: {
          a: {
            color: "#dd6b20",
            "&hover": {
              color: "#9c4221",
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};
