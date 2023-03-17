import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	shallow_array_equal,
	mod,
} from './core.mjs';

export function interp(x, xp, fp, left = null, right = null, period = null) {
	// not going to very strict check
	[x, xp, fp] = [x, xp, fp].map(asarray);
	if (xp.ndim != 1 || fp.ndim != 1) throw `Data points must be 1-D sequences`;
	if (xp.shape[0] != fp.shape[0]) throw `fp and xp are not of the same length`;
	let out = [];
	if (period != null) {
		x = mod(x, period);
		xp = mod(xp, period);
	}
}

// tester
// 	.add(
// 		interp,
// 		() => 0,
// 		() => 1
// 	)
// 	.add(
// 		interp,
// 		() => 0,
// 		() => 1
// 	)
// 	.add(
// 		interp,
// 		() => 0,
// 		() => 1
// 	);
