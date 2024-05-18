const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-prohibited-text');

const ruleTester = new RuleTester();

ruleTester.run('no-prohibited-text', rule, {
  valid: [
    { code: 'let allowedVariable;', options: [['prohibitedVariable']] },
    { code: 'const safeName = 1;', options: [['bannedName']] }
  ],
  invalid: [
    {
      code: 'let prohibitedVariable;',
      options: [['prohibitedVariable']],
      errors: [{ messageId: 'prohibitedText', data: { name: 'prohibitedVariable' } }]
    },
    {
      code: 'const bannedName = 1;',
      options: [['bannedName']],
      errors: [{ messageId: 'prohibitedText', data: { name: 'bannedName' } }]
    }
  ]
});

console.log('All tests passed!');