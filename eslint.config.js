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
    plugins: { "no-toxic-js": prohibitedTextPlugin },
    rules: {
      "no-toxic-js/no-prohibited-text": "error",
    },
  }
]