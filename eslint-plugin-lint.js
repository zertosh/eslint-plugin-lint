'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  rules: {},
};

const seen = Object.create(null);

Object.defineProperty(module.exports, 'load', {
  value: function load() {
    const targets = Array.prototype.slice.call(arguments);
    targets.forEach(target => {
      if (!seen[target]) {
        fs.readdirSync(target)
          .filter(name => name.endsWith('.js'))
          .map(name => path.resolve(target, name))
          .forEach(filename => {
            const rulename = path.basename(filename, '.js');
            module.exports.rules[rulename] = require(filename);
          });
        seen[target] = true;
      }
    });
  },
  configurable: true,
  enumerable: false,
  writable: true,
});
