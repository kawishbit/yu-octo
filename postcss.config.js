/* eslint-env node */
module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
