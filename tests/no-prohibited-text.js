const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-prohibited-text');

const ruleTester = new RuleTester();

ruleTester.run('no-prohibited-text', rule, {
  valid: [
    { code: 'let allowedVariable;' },
    { code: 'const safeName = 1;' },
    { code: 'function allowedFunction() {}' },
    { code: 'class AllowedClass {}' },
    { code: 'let customVariable;', options: [['prohibitedVariable']] }
  ],
  invalid: [
    {
      code: 'let foo;',
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'foo' } }]
    },
    {
      code: 'let bar;',
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'bar' } }]
    },
    {
      code: 'const baz = 1;',
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'baz' } }]
    },
    {
      code: 'let badword1;',
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'badword1' } }]
    },
    {
      code: 'const badword2 = 1;',
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'badword2' } }]
    },
    {
      code: 'let prohibitedVariable;',
      options: [['prohibitedVariable']],
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'prohibitedVariable' } }]
    },
    {
      code: 'const bannedName = 1;',
      options: [['bannedName']],
      errors: [{ messageId: 'prohibitedText', data: { type: 'Variable', name: 'bannedName' } }]
    },
  ]
});

console.log('All tests passed!');