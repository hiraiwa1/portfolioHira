/* 開発用 */

const HtmlWebpackPlugin = require('html-webpack-plugin'); //htmlに自動で生成したファイルを注入してくれる
const {merge} = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = () => merge(commonConf({outputFile, assetFile}), {
  mode: 'development', //分割
  devtool: 'source-map', //分割
  devServer: {
    open: true,
    contentBase: './public',
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', //分割
    }),
  ]
});