import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Flat.Config[]} */
const config = [
  tseslint.configs["eslint-recommended"],
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts,tsx}"],
    ignores: ["node_modules/", "dist/", "/*.*"],
    plugins: {
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "__expecting_you_to_set_tsconfig_path",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-import-type-side-effects": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "array-callback-return": "warn",
      "unused-imports/no-unused-imports": "warn",
      "no-template-curly-in-string": "warn",
    },
  },
];

export default config;
