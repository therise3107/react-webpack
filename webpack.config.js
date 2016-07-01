var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js/public');
var APP_DIR = path.resolve(__dirname, 'src/js/app');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
   'webpack/hot/only-dev-server',
      './src/js/app/index.jsx' ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot','babel']
      }
    ]
  }
};

module.exports = config;
