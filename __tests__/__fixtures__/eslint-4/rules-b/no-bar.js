module.exports = context => {
  const sourceCode = context.getSourceCode();
  return {
    Program(node) {
      const source = sourceCode.text;
      if (/bar/.test(source)) {
        context.report({
          node,
          message: 'Has "bar"',
        });
      }
    },
  };
};

// module.exports.schema = [];
