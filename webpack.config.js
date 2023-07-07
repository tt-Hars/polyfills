const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
module.exports = {
  mode,

  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // no additional settings, this will refer to .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: "./public",
  },
};
