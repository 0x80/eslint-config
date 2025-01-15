# ESLint Config

A collection of minimal but opinionated ESLint configurations, to standardize and simplify my own projects and hopefully yours too.

## Usage

`pnpm i @codecompose/eslint-config`

Create a file named `.eslintrc.(c)js` in the root of your package. Use `.cjs` if your packages is ESM format.

You are expected to point `parserConfig.project` to your tsconfig.json file. For example:

```js
// @ts-check
const { resolve } = require("node:path");
const project = resolve(__dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@codecompose/eslint-config"],
  parserOptions: {
    project,
  },
};
```

## Available Configurations

By default `extends: ["@codecompose/eslint-config"]` will point to the base configuration and is effectively the same as writing `extends: ["@codecompose/eslint-config/base"]`. Other available configurations are:

- `vercel-app`: A Next.js based React application using the Vercel style guide
- `vercel-lib`: A React library using the Vercel style guide
- `node`: A node.js application or cloud service
- `react`: A React library
