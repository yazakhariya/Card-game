const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './card-game.js',
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.{png|svg|jpg|jpeg|gif}$/i,
        type: 'asset/resource',
      },
      {
        test: /\.{woff|woff2|eot|ttf|otf}$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'img', to: 'img' }],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './card-game.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
};
