module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./components/**/*.js", "./pages/**/*.js"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: [
              "pre",
              "code",
              ".prose",
              "ol",
              "li",
              "p",
              "h3",
              "h1",
              "img",
              "strong",
              "em",
            ],
          },
        }
      : {}),
  },
};
