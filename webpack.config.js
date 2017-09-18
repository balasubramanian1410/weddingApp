var path = require('path');
var webpack = require('webpack');
//var ForerunnerDB = require("forerunnerdb");
//var fdb = new ForerunnerDB();

var ENV = 'production';
//var ENV = 'development';

module.exports = {
  devServer: {
    inline:true,
    port: 8085
  },
  entry: './main.js',
  output: { path: __dirname, filename: './scripts/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};