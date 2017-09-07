const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // target: "electron-renderer",
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8888",
      "webpack/hot/only-dev-server",
      "react-hot-loader/patch",
      "src/index.js",
    ],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "../src"),
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/\.spec\.js/, /(node_modules)/],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
