const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.js',
  ].filter(Boolean),

  module: {
    rules: [{
      test:  /\.(sass|scss)$/,
      use: [isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }],
  },

  plugins: [
    !isDevMod && new CleanWebpackPlugin(),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
