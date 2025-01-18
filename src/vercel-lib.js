/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

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
        React: true,
        JSX: true,
      },
    },
  },
];

export default config;
