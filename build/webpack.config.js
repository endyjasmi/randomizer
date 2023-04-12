process.env.NODE_ENV = "build";

const path = require("path");

module.exports = Object.assign(require("../webpack.config.js"), {
  devtool: "source-map",
  entry: path.join(process.cwd(), "source", "index.ts"),
  mode: "production",
  output: {
    filename: "randomizer.umd.js",
    globalObject: "this",
    library: { name: "@endyjasmi/randomizer", type: "umd" },
    path: path.join(__dirname, "script"),
  },
});
