let path = require('path')
let webpack = require('webpack')
let TARGET = process.env.npm_lifecycle_event
let mergecat = require('./src/util').mergecat

let exp = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [],
  resolve: {
    alias: {
      'mapbox-gl': path.join(__dirname, 'node_modules', 'mapbox-gl', 'dist', 'mapbox-gl.js')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,loaders: ['babel'],include: path.join(__dirname, 'src') },
      { include: path.join(__dirname, 'node_modules', 'normalize.css', 'normalize.css'), loaders: ['style', 'css']},
      { include: path.join(__dirname, 'node_modules', 'font-awesome', 'css', 'font-awesome.css'), loaders: ['style', 'css']},
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { include: path.join(__dirname, 'src', 'react-mapbox-gl', 'mapbox-css', 'mapbox-gl.css'), loaders: ['style', 'css']},
      { test: /\.png$/, include: path.join(__dirname, 'media'), loader: 'url?limit=10000&mimetype=image/x-apple-ios-png&prefix=images' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  }
}
if(TARGET === 'start') exp = mergecat(exp,{
  entry: [
    'webpack-dev-server/client?http://localhost:3000'
  ]
})
if(TARGET === 'build') exp = mergecat(exp,{
})
//console.log('exp',exp)
module.exports = exp
