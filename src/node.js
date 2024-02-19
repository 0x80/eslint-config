/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js", "./extra.js"],
  env: {
    node: true,
  },
};
