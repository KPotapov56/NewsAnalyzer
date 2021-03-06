const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.js'),
    about: path.resolve(__dirname, 'src/scripts/about.js'),
    statics: path.resolve(__dirname, 'src/scripts/statistics.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    },
    {
      test: /\.(woff|woff2|ttf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: './vendor/fonts/[name].[ext]'
        }
      }
    },
    {
      test: /\.(jpg|jpeg|png|svg|webp)$/,
      use: 'file-loader?name=./images/[name].[ext]&esModule=false'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/statistics.html',
      chunks: ['statics'],
      filename: 'statistics.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new WebpackMd5Hash(),
  ]
};