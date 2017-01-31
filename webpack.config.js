'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./app.jsx",
    output: {
    	path: path.join(__dirname, '/dist'),
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
					test: /\.jsx?$/,
	        loader: "babel-loader",
	        query: {
	          presets: ['es2015', 'react']
	        }
	      }
      ]
    },
    externals: {
      'react': 'React'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
};
