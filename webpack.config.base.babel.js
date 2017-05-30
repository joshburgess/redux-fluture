/* eslint-disable import/no-commonjs */

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    library: 'ReduxFluture',
    libraryTarget: 'umd',
  },
  externals: {
    fluture: {
      root: 'Fluture',
      commonjs2: 'fluture',
      commonjs: 'fluture',
      amd: 'fluture',
    },
  },
  resolve: {
    extensions: ['.js'],
    mainFields: ['module', 'main', 'jsnext:main'],
  },
}

module.exports = config
