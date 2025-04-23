const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	output: {
		path: path.resolve(__dirname, "dev"),
		filename: "[name].js",
		clean: true,
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "public/favicon.ico"),
					to: path.resolve(__dirname, "dev"),
				},
				{
					from: path.resolve(__dirname, "src/assets"),
					to: path.resolve(__dirname, "dev/assets"),
				},
			],
		}),
	],
	devServer: {
		hot: true,
		port: 3000,
		open: true,
	},
});
