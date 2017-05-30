/* eslint-disable import/no-commonjs */

const webpack = require('webpack')
const baseConfig = require('./webpack.config.base.babel')
const BabiliPlugin = require('babili-webpack-plugin')

const config = {
  ...baseConfig,
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
        },
      },
    }),
    new BabiliPlugin({}, {
      comments: false,
    }),
  ],
}

module.exports = config
