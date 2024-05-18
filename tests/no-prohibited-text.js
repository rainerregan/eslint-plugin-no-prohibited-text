const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-prohibited-text');
const defaultProhibitedNames = require('../lib/default-values');

const ruleTester = new RuleTester();

ruleTester.run('no-prohibited-text', rule, {
  valid: [
    { code: 'let allowedVariable;' }, // No prohibited variable names provided
    { code: 'const safeName = 1;' },  // No prohibited variable names provided
    { code: 'let customVariable;', options: [['prohibitedVariable']] }, // Custom option
  ],
  invalid: [
    ...defaultProhibitedNames.map(name => ({
      code: `let ${name};`,
      errors: [{ messageId: 'prohibitedText', data: { name } }]
    })),
    {
      code: 'let prohibitedVariable;',
      options: [['prohibitedVariable']],
      errors: [{ messageId: 'prohibitedText', data: { name: 'prohibitedVariable' } }] // Custom option
    },
    {
      code: 'const bannedName = 1;',
      options: [['bannedName']],
      errors: [{ messageId: 'prohibitedText', data: { name: 'bannedName' } }] // Custom option
    }
  ]
});

console.log('All tests passed!');