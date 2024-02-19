/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js", "./extra.js"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
};
