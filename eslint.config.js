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
    plugins: { "eslint-plugin-no-toxic": prohibitedTextPlugin },
    rules: {
      "eslint-plugin-no-toxic/no-prohibited-text": "error",
    },
  }
]