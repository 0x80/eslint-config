/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./base.js",
    require.resolve("@vercel/style-guide/eslint/next"),
    "./extra.js",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
};
