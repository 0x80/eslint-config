import vercelStyleGuide from "@vercel/style-guide/eslint/next";
import globals from "globals";
import baseConfig from "./base.js";

/** @type {import('eslint').Flat.Config[]} */
const config = [
  ...baseConfig,
  ...vercelStyleGuide,
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },
  },
];

export default config;
