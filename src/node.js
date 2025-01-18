import globals from "globals";
import baseConfig from "./base.js";

/** @type {import('eslint').Flat.Config[]} */
const config = [
  ...baseConfig,
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default config;
