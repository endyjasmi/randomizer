process.env.NODE_ENV = "test";

const moduleResolver = require("babel-plugin-module-resolver");
function resolvePath(sourcePath, currentFile, options) {
  return moduleResolver
    .resolvePath(sourcePath, currentFile, options)
    ?.replace(/\.[cm]?[jt]s$/, "");
}

require("@babel/register")({
  extensions: [".js", ".cjs", ".mjs", ".ts", ".cts", ".mts"],
  plugins: [["module-resolver", { resolvePath }]],
});
