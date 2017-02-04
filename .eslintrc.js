'use strict';
module.exports = {
  env: { browser: true, commonjs: true, es6: true, node: true },
  parserOptions: { sourceType: 'module' },
  rules: {
    'comma-dangle': [ 2, 'never' ],
    'constructor-super': 'warn',
    'default-case': [ 2 ],
    'dot-location': [ 2, 'property' ],
    'dot-notation': [ 2 ],
    'eol-last': [ 2, 'unix' ],
    indent: [ 2, 2, { SwitchCase: 1 } ],
    'max-len': [ 2, 100 ],
    'no-unused-vars': [ 1 ],
    'no-var': [ 2 ],
    'prefer-arrow-callback': [ 1 ],
    quotes: [ 2, 'single' ],
    semi: [ 2, 'always' ],
    strict: [ 1, 'global' ],
    'valid-typeof': 'warn',
    'operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'before', ':': 'before', '+=': 'none' } }
    ]
  },
  extends: [ 'eslint:recommended' ]
};
