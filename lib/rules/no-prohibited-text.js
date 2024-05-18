const defaultProhibitedNames = require('../default-values');

module.exports = {
  meta: {
    type: "problem", // "problem", "suggestion", or "layout"
    docs: {
      description: "disallow specified text as variable names",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [
      {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: true,
        default: defaultProhibitedNames // Default prohibited variable names
      }
    ],
    messages: {
      prohibitedText: "STOP 🔴 name '{{name}}' is prohibited."
    }
  },
  create(context) {
    // Use the provided options or default to the specified default names
    const prohibitedTexts = context.options[0] || defaultProhibitedNames;

    return {
      Identifier(node) {
        if (prohibitedTexts.includes(node.name)) {
          context.report({
            node,
            messageId: "prohibitedText",
            data: {
              name: node.name
            }
          });
        }
      }
    };
  }
};
