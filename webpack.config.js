const webpack = require("webpack");

const webpackConfig = {
  devtool: "inline-source-map",
  mode: "none",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.[cm]?[jt]s$/,
      },
    ],
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
      resource.request = resource.request.substring(5);
    }),
    new webpack.ProvidePlugin({
      // Buffer: ["buffer", "Buffer"],
      // process: "process/browser",
    }),
  ],
  resolve: {
    extensionAlias: {
      ".js": [".ts", ".js"],
      ".cjs": [".cts", ".cjs"],
      ".mjs": [".mts", ".mjs"],
    },
    fallback: {
      // buffer: require.resolve("buffer/"),
      // events: require.resolve("events/"),
      // path: require.resolve("path-browserify"),
      // process: require.resolve("process/browser"),
      // stream: require.resolve("readable-stream"),
      // string_decoder: require.resolve("string_decoder"),
      // url: require.resolve("url/"),
    },
  },
  stats: "errors-only",
};

if (process.env.NODE_ENV === "test") {
  webpackConfig.plugins.unshift(new webpack.EnvironmentPlugin(process.env));
}

module.exports = webpackConfig;
