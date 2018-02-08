const path = require('path');

require('eslint-plugin-lint').load(
  path.join(__dirname, 'rules-a'),
  path.join(__dirname, 'rules-b'),
);

module.exports = {
  root: true,

  rules: {
    'lint/no-foo': 1,
    'lint/no-bar': 2,
  },

  plugins: [
    'lint',
  ],
};
