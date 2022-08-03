const path = require('path');

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'formsflowFormioTheme',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'formsflowFormioTheme.js',
    environment: {
      arrowFunction: false
    },
  },
  mode: 'development',
  target: 'es5',
  performance: { hints: false },
  externals: {
    formiojs: 'Formio'
  },
};
