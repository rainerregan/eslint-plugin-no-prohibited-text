const prohibitedTextRule = require('./rules/no-prohibited-text');
const plugin = {
  rules: {
    'no-prohibited-text': prohibitedTextRule
  }
};

module.exports = plugin;
