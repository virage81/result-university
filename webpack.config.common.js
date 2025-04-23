const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: "./index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
