// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    /**
     * The code using this configuration is expected to point
     * parserOptions.project to the tsconfig file.
     */
    project: "__expecting_you_to_set_tsconfig_path",
    ecmaVersion: 2022,
    sourceType: "module",
  },
  extends: [
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { args: "after-used", argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/no-import-type-side-effects": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "array-callback-return": "warn",
    "unused-imports/no-unused-imports": "warn",
    "no-template-curly-in-string": "warn",
  },

  /**
   * These can also be put in eslintignore files, but for all packages we would
   * like to ignore node_modules, dist and root level files (outside the src
   * dir)
   */
  ignorePatterns: ["node_modules/", "dist/", "/*.*"],
});
