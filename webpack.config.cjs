const path = require('path');

let entry = path.resolve(__dirname, './core/core.mjs');
let outputPath = path.resolve(__dirname, 'dist');
let mode = 'production';

const webpack = require('webpack');

let esmConfig = {
	entry,
	output: {
		path: outputPath,
		filename: 'bundle.mjs',
		library: {
			type: 'module',
		},
	},
	experiments: {
		outputModule: true,
	},
	resolve: {
		fallback: {
			util: false,
		},
	},
	mode,
};

let namedConfig = {
	entry,
	output: {
		path: outputPath,
		filename: 'nj.js',
		library: 'nj',
	},
	resolve: {
		fallback: {
			util: false,
		},
	},
	mode,
};

module.exports = [esmConfig, namedConfig];
