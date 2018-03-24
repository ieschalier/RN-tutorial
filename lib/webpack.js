const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'react-native-tutorial',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, './src')],
        use: 'babel-loader',
      },
    ],
  },
  externals: ['react', 'react-native'],
}
