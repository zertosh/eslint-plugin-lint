# eslint-plugin-lint [![Build Status](https://travis-ci.org/zertosh/eslint-plugin-lint.svg?branch=master)](https://travis-ci.org/zertosh/eslint-plugin-lint)

Load arbitrary [ESLint](https://eslint.org/) rules from any number of directories, and use them under the `lint/` namespace.

## Install

```sh
$ npm install eslint-plugin-lint --save-dev
```

## Usage

Consider a project with an `.eslintrc.js` at the root, and two directories with rules files:

```
my-project
├── .eslintrc.js
├─┬ my-rules
│ ├── no-foo.js
│ └── no-bar.js
└─┬ their-rules
  ├── no-baz.js
  └── no-qux.js
```

To make them available to ESLint, in the `.eslintrc.js` add:

```js
const path = require('path');

// (1) Require "eslint-plugin-lint", then call `load` with the
//     rules directories.
require('eslint-plugin-lint').load(
  path.join(__dirname, 'my-rules'),   // Tip: Use an absolute path to 
  path.join(__dirname, 'their-rules') //      avoid cwd resolution issues.
);  

module.exports {
  plugins: [
    'lint' // (2) Add the "eslint-plugin-lint" package as a plugin.
  ],
  rules: {
    'lint/no-foo': 1, // (3) Declare the rules options with the "lint/"
    'lint/no-bar': 1, //     prefix, plus the rule file name without ".js".
    'lint/no-baz': 1,
    'lint/no-qux': 1
  }
};
```

Now the rules are available like any other as `lint/no-foo`, `lint/no-ba`, and so on.

## Prior Art

* [`not-an-aardvark/eslint-plugin-rulesdir`](https://github.com/cletusw/not-an-aardvark/eslint-plugin-rulesdir)
* [`eslint-plugin-local-rules`](https://github.com/cletusw/eslint-plugin-local-rules)
