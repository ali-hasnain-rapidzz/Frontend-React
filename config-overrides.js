/* eslint-disable no-undef */

const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@App": path.resolve(__dirname, "src"),
    "@Components": path.resolve(__dirname, "src/components"),
    "@Pages": path.resolve(__dirname, "src/pages"),
    "@Services": path.resolve(__dirname, "src/services"),
    "@Types": path.resolve(__dirname, "src/types"),
    "@Provider": path.resolve(__dirname, "src/provider"),
    "@Common": path.resolve(__dirname, "src/common"),
    "@Routes": path.resolve(__dirname, "src/routes"),
    "@Validations": path.resolve(__dirname, "src/validations"),
    "@Context": path.resolve(__dirname, "src/context"),
  }),
);
