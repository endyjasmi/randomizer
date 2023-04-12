const babelConfig = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-typescript", { transpileOnly: true }],
  ],
  sourceMaps: "inline",
};

if (process.env.NODE_ENV === "test") {
  babelConfig.plugins = babelConfig.plugins || [];
  babelConfig.plugins.push("istanbul");
}

module.exports = babelConfig;
