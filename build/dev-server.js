process.env.NODE_ENV = "development"

var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")
var webpackConfig = require("./webpack.config")

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-react-component-tools": "true",
  },
  stats: {
    colors: true,
  },
}).listen(8888, "0.0.0.0", function(err) {
  if (err) {
    return console.log(err)
  }
  console.log("Listening at http://localhost:8888/")
})
