import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax, ndoffset } from './core.mjs';

export function compile(fn, params = {}) {
	console.log(fn.toString());
}

// process.env.PRODUCTION || tester(
// 	compile,
// 	() => {
// 		console.log([...ndoffset([1, 2, 3], [-2, -1, 1], 0)]);
// 		compile(({ x }) => x * 5 + 1);
// 		compile(function fn({ x }) {
// 			return x * 5 + 1;
// 		});
// 	},
// 	() => 1
// );
