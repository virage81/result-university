const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
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
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "public/favicon.ico"),
					to: path.resolve(__dirname, "dist"),
				},
				{
					from: path.resolve(__dirname, "public/assets"),
					to: path.resolve(__dirname, "dist/assets"),
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [[require("postcss-preset-env")]],
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
		],
	},
};
