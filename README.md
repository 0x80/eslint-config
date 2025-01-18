# ESLint Config

A collection of minimal but opinionated ESLint configurations.

## Usage

`pnpm i @codecompose/eslint-config`

Create a file named `eslint.config.js` in the root of your package.

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

- `node`: A Node.js application or library
- `react`: A React library
- `vercel-app`: A Next.js based React application using the Vercel style guide
- `vercel-lib`: A React library using the Vercel style guide
