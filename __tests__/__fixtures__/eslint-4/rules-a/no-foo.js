module.exports = context => {
  return {
    Program() {
      context
        .getSourceCode()
        .getAllComments()
        .forEach(commentNode => {
          if (/\b(FOO)\b/.test(commentNode.value)) {
            context.report({
              node: commentNode,
              message: 'Has "FOO"',
            });
          }
        });
    },
  };
};
