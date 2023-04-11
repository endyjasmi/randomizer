const path = require("path");

module.exports = Object.assign(require("../webpack.config.js"), {
  devtool: "source-map",
  entry: path.join(process.cwd(), "source", "index.ts"),
  mode: "production",
  output: {
    filename: "randomizer.min.js",
    library: { name: "@endyjasmi/randomizer", type: "global" },
    path: path.join(__dirname, "web"),
  },
});
