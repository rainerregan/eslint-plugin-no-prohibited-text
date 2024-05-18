// eslint.config.js
"use strict";

// Import the ESLint plugin locally
const prohibitedTextPlugin = require("./lib/index");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { "no-prohibited-text": prohibitedTextPlugin },
    rules: {
      "no-prohibited-text/no-prohibited-text": "error",
    },
  }
]