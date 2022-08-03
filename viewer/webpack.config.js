const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/renderer.js',
  resolve: {
    symlinks: false
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib/formiojs'),
    filename: 'formio.form.min.js'
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    new webpack.DefinePlugin({
      __VERSION__: `"${packageJson.version}"`
    })
  ],
  externals: {
    formiojs: 'Formio',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
