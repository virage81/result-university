const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		hot: true,
		port: 3000,
		open: true,
	},
});
