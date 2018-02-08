'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  rules: {},
};

const seen = new Set();

Object.defineProperty(module.exports, 'load', {
  value: function load(...targets) {
    targets.forEach(target => {
      if (!seen.has(target)) {
        fs.readdirSync(target)
          .filter(name => name.endsWith('.js'))
          .map(name => path.resolve(target, name))
          .forEach(filename => {
            const rulename = path.basename(filename, '.js');
            module.exports.rules[rulename] = require(filename);
          });
        seen.add(target);
      }
    });
  },
  configurable: true,
  enumerable: false,
  writable: true,
});
