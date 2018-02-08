'use strict';

const path = require('path');
const child_process = require('child_process');

function sanitize(str) {
  return String(str).split(__dirname).join('');
}

function yarnInstall(cwd) {
  return child_process.spawnSync('yarn', ['install'], {cwd, encoding: 'utf8'});
}

function runESLint(cwd) {
  return child_process.spawnSync(
    'node_modules/.bin/eslint',
    [
      'has-bar.js',
      'has-foo.js',
    ],
    {cwd, encoding: 'utf8'},
  );
}

test('works with eslint 3.x', () => {
  const cwd = path.join(__dirname, '__fixtures__/eslint-3');

  const yarnRet = yarnInstall(cwd);
  expect(yarnRet.status).toEqual(0);
  expect(yarnRet.error).toBeUndefined();

  const eslintRet = runESLint(cwd);
  expect(sanitize(eslintRet.stderr)).toMatchSnapshot();
  expect(sanitize(eslintRet.stdout)).toMatchSnapshot();
});

test('works with eslint 4.x', () => {
  const cwd = path.join(__dirname, '__fixtures__/eslint-4');

  const yarnRet = yarnInstall(cwd);
  expect(yarnRet.status).toEqual(0);
  expect(yarnRet.error).toBeUndefined();

  const eslintRet = runESLint(cwd);
  expect(sanitize(eslintRet.stderr)).toMatchSnapshot();
  expect(sanitize(eslintRet.stdout)).toMatchSnapshot();
});
