import { tester, array, asarray, slice, NDArray, mod, argsort, concatenate, subtract, add } from './core.mjs';

/**
 * @param {NDArray} x
 * @param {NDArray} xp
 * @param {NDArray} fp
 * @param {null|number} [left]
 * @param {null|number} [right]
 * @param {null|number} [period]
 * @returns {NDArray}
 */
export function interp(x, xp, fp, left = null, right = null, period = null) {
	// not going to very strict check
	[x, xp, fp] = [x, xp, fp].map(a => asarray(a));
	if (xp.ndim != 1 || fp.ndim != 1) throw `Data points must be 1-D sequences`;
	if (xp.shape[0] != fp.shape[0]) throw `fp and xp are not of the same length`;

	if (period != null) {
		x = mod(x, period);
		xp = mod(xp, period);
		let asort_xp = argsort(xp);
		// console.log(xp, asort_xp);
		xp = xp.at(asort_xp);
		fp = fp.at(asort_xp);
		xp = concatenate([subtract(xp.at(slice(-1)), period), xp, add(xp.at(slice(0, 1)), period)]);
		fp = concatenate([fp.at(slice(-1)), fp, fp.at(slice(0, 1))]);
	}

	left ??= fp.item(0);
	right ??= fp.item(-1);

	let data = Array(x.size);
	let i = 0;
	let lower = xp.item(0);
	let upper = xp.item(-1);
	for (let value of x.flat) {
		let y;
		if (value < lower) {
			y = left;
		} else if (value > upper) {
			y = right;
		} else {
			let i = 1;
			for (; i < xp.length && value > xp.item(i); i++);
			let x1 = xp.item(i - 1);
			if (value == x1) {
				y = fp.item(i - 1);
			} else {
				let x2 = xp.item(i);
				if (value == x2) {
					y = fp.item(i);
				} else {
					let y1 = fp.item(i - 1);
					let y2 = fp.item(i);

					y = ((value - x1) * (y2 - y1)) / (x2 - x1) + y1;
				}
			}
		}
		data[i++] = y;
	}

	return new NDArray(x.shape, data);
}

tester
	.add(
		interp,
		() => interp(2.5, [1, 2, 3], [3, 2, 0]),
		() => 1.0
	)
	.add(
		interp,
		() => interp(4.5, [6, 4, 5], [3, 2, 0]),
		() => 3
	)
	.add(
		interp,
		() => interp([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]),
		() => array([3, 3, 2.5, 1.0, 0])
	)
	.add(
		interp,
		() =>
			interp(
				[-180, -170, -185, 185, -10, -5, 0, 365],
				[190, -190, 350, -350],
				[5, 10, 3, 4],
				null,
				null,
				360
			),
		() => array([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75])
	);
// .add(
// 	interp,
// 	() => interp(3.14, [1, 2, 3], [3, 2, 0], null, -99.0),
// 	() => -99.0
// )
// .add(
// 	interp,
// 	() =>
// 		interp(
// 			[-180, -170, -185, 185, -10, -5, 0, 365],
// 			[190, -190, 350, -350],
// 			[5, 10, 3, 4],
// 			null,
// 			null,
// 			360
// 		),
// 	() => array([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75])
// );
