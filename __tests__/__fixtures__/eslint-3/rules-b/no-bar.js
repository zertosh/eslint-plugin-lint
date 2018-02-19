module.exports = context => {
  return {
    Program() {
      context
        .getSourceCode()
        .getAllComments()
        .forEach(commentNode => {
          if (/\b(BAR)\b/.test(commentNode.value)) {
            context.report({
              node: commentNode,
              message: 'Has "BAR"',
            });
          }
        });
    },
  };
};
