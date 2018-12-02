const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
            }
        }]
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
        }, {
            loaders: ['style-loader', 'css-loader']
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin]
};