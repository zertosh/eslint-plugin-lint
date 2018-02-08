module.exports = context => {
  const sourceCode = context.getSourceCode();
  return {
    Program(node) {
      const source = sourceCode.text;
      if (/foo/.test(source)) {
        context.report({
          node,
          message: 'Has "foo"',
        });
      }
    },
  };
};

// module.exports.schema = [];
