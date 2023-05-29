import { tester, array, asarray, NDArray, empty_like } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {NDArray} v
 * @param {string} [side]
 * @returns {NDArray}
 */
export function searchsorted(a, v, side = 'left') {
	if (a instanceof NDArray) a = a.array();

	v = asarray(v);

	let out = empty_like(v);
	let i = 0;
	let _bisect = side == 'left' ? _bisectLeft : _bisectRight;
	for (let x of v.flat) {
		out.data[i++] = _bisect(a, x);
	}

	return out;
}

function _bisectLeft(arr, x) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = (left + right) >> 1;
		if (arr[mid] < x) left = mid + 1;
		else right = mid - 1;
	}
	return left;
}

function _bisectRight(arr, x) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = (left + right) >> 1;
		if (arr[mid] > x) right = mid - 1;
		else left = mid + 1;
	}
	return left;
}

process.env.PRODUCTION ||
	tester
		.add(
			searchsorted,
			() => searchsorted([1, 2, 3, 4, 5], 3),
			() => 2
		)
		.add(
			searchsorted,
			() => searchsorted([1, 2, 3, 4, 5], 3, 'right'),
			() => 3
		)
		.add(
			searchsorted,
			() => searchsorted([1, 2, 3, 4, 5], [-10, 10, 2, 3]),
			() => array([0, 5, 1, 2])
		);
