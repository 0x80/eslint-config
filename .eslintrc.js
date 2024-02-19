// @ts-check
const { defineConfig } = require("eslint-define-config");

/** This config exists just to lint the eslint-config-custom package itself. */
module.exports = defineConfig({
  root: true,
  extends: [
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
});
