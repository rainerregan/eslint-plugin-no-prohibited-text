const prohibitedWords = require('../prohibited-words/index');

// Normalize prohibited words
const normalizedProhibitedWords = prohibitedWords.map(word => word.toLowerCase().replace(/[-_]/g, ''));

module.exports = {
  meta: {
    type: "problem", // "problem", "suggestion", or "layout"
    docs: {
      description: "disallow specified text as variable, function, and class names",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [
      {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: true
      }
    ],
    messages: {
      prohibitedText: "STOP 🛑 {{type}} name '{{name}}' is toxic. Please change it!"
    }
  },
  create(context) {
    const customProhibitedTexts = context.options[0];
    const prohibitedTexts = customProhibitedTexts ?
      customProhibitedTexts.map(word => word.toLowerCase().replace(/[-_]/g, '')) :
      normalizedProhibitedWords;

    function normalize(name) {
      return name.toLowerCase().replace(/[-_]/g, '');
    }

    function checkIdentifier(node, type) {
      const normalizedName = normalize(node.name);
      if (prohibitedTexts.includes(normalizedName)) {
        context.report({
          node,
          messageId: "prohibitedText",
          data: {
            type: type,
            name: node.name
          }
        });
      }
    }

    return {
      Identifier(node) {
        checkIdentifier(node, "Variable");
      },
      FunctionDeclaration(node) {
        if (node.id) {
          checkIdentifier(node.id, "Function");
        }
      },
      ClassDeclaration(node) {
        if (node.id) {
          checkIdentifier(node.id, "Class");
        }
      }
    };
  }
};
