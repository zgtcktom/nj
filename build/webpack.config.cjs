const path = require('path');
const webpack = require('webpack');

module.exports = [
	{
		entry: path.resolve(__dirname, 'index.cjs'),
		output: {
			path: path.resolve(__dirname, '..', 'dist'),
			filename: 'bundle.cjs',
			libraryTarget: 'commonjs',
		},
		resolve: {
			fallback: {
				util: false,
			},
		},
		optimization: {
			minimize: false,
		},
		performance: {
			hints: false,
		},
		mode: 'production',
		cache: {
			type: 'filesystem',
		},
	},
	{
		entry: path.resolve(__dirname, 'browser.cjs'),
		output: {
			path: path.resolve(__dirname, '..', 'dist'),
			filename: 'bundle.min.js',
			libraryTarget: 'window',
		},
		resolve: {
			fallback: {
				util: false,
			},
		},
		mode: 'production',
		cache: {
			type: 'filesystem',
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.PRODUCTION': true,
			}),
		],
	},
];
