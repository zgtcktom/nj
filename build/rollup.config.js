import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

export default [
	{
		input: './index.mjs',
		output: {
			file: './dist/bundle.cjs',
			format: 'umd',
			name: 'nj',
		},
		plugins: [replace({ 'process.env.PRODUCTION': false })],
	},
	{
		input: './index.mjs',
		output: {
			file: './dist/bundle.min.cjs',
			format: 'umd',
			name: 'nj',
		},
		plugins: [terser(), replace({ 'process.env.PRODUCTION': true })],
	},
];
