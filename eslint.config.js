import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Flat.Config[]} */
const config = [
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    rules: {
      ...tseslint.configs["eslint-recommended"].rules,
      ...tseslint.configs.recommended.rules,
    },
  },
];

export default config;
