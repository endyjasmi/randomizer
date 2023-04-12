module.exports = {
  plugins: [["istanbul"]],
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-typescript", { transpileOnly: true }],
  ],
  sourceMaps: "inline",
};
