const minorConfig = require('./.ncurc.minor');

module.exports = {
  reject: ['@mdx-js/react', 'next', 'rollup', 'vite', '@next/eslint-plugin-next', ...minorConfig.reject],
};
