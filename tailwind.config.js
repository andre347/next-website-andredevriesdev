const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  // purge: {
  //   enabled: process.env.NODE_ENV === "production",
  //   content: ["./{components,pages}/**/*.{js,ts,jsx,tsx}"],
  // },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  variants: {
    extend: {
      backgroundColor: ["active", "focus-visible"],
    },
  },
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
  variants: {},
  plugins: [
    require("@tailwindcss/ui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // line clamp is for wrapping and or breaking the lines
    require("@tailwindcss/line-clamp"),
  ],
};
