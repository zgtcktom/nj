const path = require('path');

let entry = path.resolve(__dirname, './core/core.mjs');
let outputPath = path.resolve(__dirname, 'dist');
let mode = 'production';

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
	mode,
};

let namedConfig = {
	entry,
	output: {
		path: outputPath,
		filename: 'nj.js',
		library: 'nj',
	},
	mode,
};

module.exports = [esmConfig, namedConfig];
