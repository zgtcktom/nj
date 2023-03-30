const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './core/core.mjs'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		library: '$',
		libraryTarget: 'umd',
	},
	module: {
		rules: [],
	},
	experiments: {
		topLevelAwait: true,
	},
	mode: ['development', 'production'][0],
};
