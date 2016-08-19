/* eslint-disable */
const path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
   entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './index.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'js/[name].js'
   
  },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('js/comm.js'), 
        // 给js中剥离的css的文件指定名称
        new ExtractTextPlugin('/css/[name].css'),

        new webpack.HotModuleReplacementPlugin()
    ],

  module: {
    loaders: [

      {test: /\.less$/,loader: ExtractTextPlugin.extract('style', 'css!less')},
      {test: /\.(png|jpg)$/,loader: 'url?limit=2048&name=imgs/[name]_[hash:4].[ext]'},
      {test: /\.jsx?$/,exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']} 

    ]
  }
}