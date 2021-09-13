/* 商用 */

const HtmlWebpackPlugin = require('html-webpack-plugin'); //htmlに自動で生成したファイルを注入してくれる
const {merge} = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[chunkhash]';
const assetFile = '[contenthash]';

module.exports = () => merge(commonConf({outputFile, assetFile}), {
  mode: 'production', //分割
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', //分割
    }),
  ]
});