const path = require('path');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const {ProvidePlugin}= require('webpack');

module.exports = ({outputFile, assetFile}) => ({
  entry: {
    "./": './src/js/script.js',
    "./vendors/scroll-polyfill": './src/js/vendors/scroll-polyfill.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `${outputFile}.js`,  //分割 テンプレートリテラル
    chunkFilename: `${outputFile}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,  //対象外のファイル
        loader: 'babel-loader',
      },
      {
        enforce: 'pre', //先に実行という設定
        test: /\.js$/,
        exclude: /node_modules/,  //対象外のファイル
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
      test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
      type: "asset/resource",
      generator: {
        filename: `images/${assetFile}[ext]`
      }
      // use: [
        // {
        //   loader: 'file-loader', 
        //   options: {
        //     name: `${assetFile}.[ext]`,  //分割
        //     outputPath: 'images',
        //     publicPath: 'images'
        //   }
        // }
      // ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader', //HtmlWebpackPluginを読み込んでないと使えない
        options: {
          minimize: false
        },
      }
    ]
  },
  stats: {
    children: true,
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${outputFile}.css`, //分割
    }),
    // new ProvidePlugin({
    //   jQuery: 'jquery',
    //   $: 'jquery'
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      // cacheGroups: {
      //   defaultVendors: {
      //     name: "vendors",
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   utils: {
      //     name: "utils",
      //     test: /src[\\/]/,
      //     chunks: 'initial', //同期的に読み込むものだけバンドルする
      //     // chunks: 'async', //非同期のものだげファイルを分けてバンドルする
      //   },
      //   default: false
      // },
    }
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, './src/scss'),
      '@imgs': path.resolve(__dirname, './src/images')
    },
    extensions: ['.js', '.scss'],
    modules: [path.resolve(__dirname, 'src'),'node_modules']
  }
});