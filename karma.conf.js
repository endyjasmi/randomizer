process.env.NODE_ENV = "test";

const { chromium, firefox, webkit } = require("playwright");
Object.assign(process.env, {
  CHROME_BIN: chromium.executablePath(),
  CHROMIUM_BIN: chromium.executablePath(),
  FIREFOX_BIN: firefox.executablePath(),
  WEBKIT_BIN: webkit.executablePath(),
  WEBKIT_HEADLESS_BIN: webkit.executablePath(),
});

module.exports = function (karmaConfig) {
  karmaConfig.set({
    basePath: __dirname,
    coverageReporter: {
      dir: "coverage",
      reporters: [{ type: "json" }, { type: "lcov" }, { type: "text" }],
      subdir: (browserName) => browserName.toLowerCase().split(/[ /-]/)[0],
    },
    files: ["source/index.test.*"],
    frameworks: ["mocha", "webpack"],
    hostname: "127.0.0.1",
    listenAddress: "0.0.0.0",
    logLevel: karmaConfig.LOG_ERROR,
    port: 9876,
    preprocessors: {
      "**/*.test.*": ["webpack"],
    },
    reporters: ["dots", "coverage"],
    singleRun: true,
    webpack: require("./webpack.config.js"),
  });
};
