const path = require("path");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(commonConfig, {
	mode: "production",
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "prod"),
		filename: "[name].js",
		clean: true,
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "public/favicon.ico"),
					to: path.resolve(__dirname, "prod"),
				},
				{
					from: path.resolve(__dirname, "src/assets"),
					to: path.resolve(__dirname, "prod/assets"),
				},
			],
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					chunks: "all",
					name: "vendor",
					test: /node_modules/,
				},
			},
		},
	},
});
