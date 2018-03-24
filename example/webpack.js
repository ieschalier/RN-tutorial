const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './src/Tutorial.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'react-native-tutorial',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
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
