
// console.log('webpack config running');

// module.exports = {
//     entry: './app.jsx',
//     output: {
//         filename: 'bundle.js', //this is the default name, so you can skip it
//         //at this directory our bundle file will be available
//         //make sure port 8090 is used when launching webpack-dev-server
//         publicPath: 'http://localhost:3002/assets'
//     },
//     module: {
//         loaders: [
//             {
//                 //tell webpack to use jsx-loader for all *.jsx files
//                 test: /\.jsx$/,
//                 loader: 'jsx-loader?insertPragma=React.DOM&harmony'
//             }
//         ]
//     },
//     externals: {
//         //don't bundle the 'react' npm package with our bundle.js
//         //but get it from a global 'React' variable
//         'react': 'React'
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     }
// }




'use strict';
console.log('webpack config running');
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
	        // test: /\.es6\.js$/, 
	        loader: "babel-loader",
	        query: {
	          presets: ['es2015', 'react']
	        }
	      },

    //   	{
				// 	test: /\.jsx?$/,
				// 	exclude: /(node_modules|public\/)/,
				// 	loader: "babel-loader"
				// },


        // {
        //   test: /\.jsx$/,
        //   loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        // }
      ]
    },
    externals: {
      'react': 'React'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
};


        //     loaders: [
        //         { test: path.join(__dirname, 'es6'),
        //           loader: 'babel-loader' }
        //     ]
        // }


  // loader: {
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   loaders: ["babel-loader"],
  // }

// module.exports = {
//     context: __dirname + "/app",
//     entry: "./src/app",
//     output: {
//       path: __dirname + "/dist",
//       filename: "bundle.js"
//     }
// 	};

// module.exports = {
//   context: __dirname + "/app",
//   entry: "./app.js",

//   output: {
//     filename: "app.js",
//     path: __dirname + "/dist",
//   },
// }



//   devtool: 'eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client?reload=true',
//     path.join(__dirname, 'app/main.js')
//   ],
//   output: {
//     path: path.join(__dirname, '/dist/'),
//     filename: '[name].js',
//     publicPath: '/'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'app/index.tpl.html',
//       inject: 'body',
//       filename: 'index.html'
//     }),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('development')
//     })
//   ],
//   module: {
//     loaders: [
//     {
//       test: /\.jsx?$/,
//       exclude: /node_modules/,
//       loader: 'react-hot',
//       query: {
//         "presets": ["react"]
//       }
//     }, {
//       test: /\.json?$/,
//       loader: 'json'
//     }
//     ]
//   }
// };