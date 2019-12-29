// Import webpack module
//var webpack = require("webpack");
// Import open browser plugin
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const webpack = require("webpack");
//Import path module
const path = require("path");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: "./src/index.js", //set entry file
  // Resolve to output directory and set file
  output: {
    path: path.resolve("public/assets"),
    filename: "bundle.js",
    publicPath: "assets"
  },
  // Add Url param to open browser plugin
  plugins: [
    new OpenBrowserPlugin({ url: "http://localhost:3000" }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin()
    //new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ],
  // Set dev-server configuration
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3000
  },
  // Add babel-loader to transpile js and jsx files
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          { loader: "babel-loader" }
          //query: {presets: ["react"]}
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // name: "./images/[name].[hash].[ext]",
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
