import {
	tester,
	asarray,
	NDArray,
	isfinite,
	all,
	less_equal,
	abs,
	subtract,
	zeros_like,
	broadcast_arrays,
	not,
	logical_and,
	equal,
	isnan,
	multiply,
	add,
} from './core.mjs';

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [rtol = 1e-5]
 * @param {number} [atol = 1e-8]
 * @param {boolean} [equal_nan = false]
 * @returns {NDArray}
 */
export function isclose(a, b, rtol = 1e-5, atol = 1e-8, equal_nan = false) {
	a = asarray(a);
	b = asarray(b);

	let afin = isfinite(a);
	let bfin = isfinite(b);
	if (all(afin) && all(bfin)) {
		return within_tol(a, b, atol, rtol);
	}

	[a, b] = broadcast_arrays(a, b);

	let finite = logical_and(afin, bfin);
	let infinite = not(finite);
	let cond = zeros_like(finite);

	// console.log(a, b, within_tol(a.at(finite), b.at(finite), atol, rtol), finite, a.at(finite), b.at(finite));

	cond.set([finite], within_tol(a.at(finite), b.at(finite), atol, rtol));
	cond.set([infinite], equal(a.at(infinite), b.at(infinite)));

	// console.log(use_advanced_indexing([[true, false]]), finite, a.at([true, false]), b.at(finite), atol, rtol);

	if (equal_nan) {
		let both_nan = logical_and(isnan(a), isnan(b));
		cond.set([both_nan], both_nan.at(both_nan));
	}

	// console.log(cond, cond.at());
	return cond;
}

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} atol
 * @param {number} rtol
 * @returns {NDArray}
 * @ignore
 */
function within_tol(a, b, atol, rtol) {
	return less_equal(abs(subtract(a, b)), add(atol, multiply(rtol, abs(b))));
}

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [rtol = 1e-5]
 * @param {number} [atol = 1e-8]
 * @param {boolean} [equal_nan = false]
 * @returns {boolean}
 */
export function allclose(a, b, rtol = 1e-5, atol = 1e-8, equal_nan = false) {
	return all(isclose(a, b, rtol, atol, equal_nan));
}

tester
	.add(
		isclose,
		() => isclose([1e10, 1e-7], [1.00001e10, 1e-8]),
		() => [true, false]
	)
	.add(
		isclose,
		() => isclose([1e10, 1e-8], [1.00001e10, 1e-9]),
		() => [true, true]
	)
	.add(
		isclose,
		() => isclose([1e10, 1e-8], [1.0001e10, 1e-9]),
		() => [false, true]
	)
	.add(
		isclose,
		() => isclose([1.0, NaN], [1.0, NaN]),
		() => [true, false]
	)
	.add(
		isclose,
		() => isclose([1.0, NaN], [1.0, NaN], undefined, undefined, true),
		() => [true, true]
	)
	.add(
		isclose,
		() => isclose([1e-8, 1e-7], [0.0, 0.0]),
		() => [true, false]
	)
	.add(
		isclose,
		() => isclose([1e-100, 1e-7], [0.0, 0.0], undefined, 0.0),
		() => [false, false]
	)
	.add(
		isclose,
		() => isclose([1e-10, 1e-10], [1e-20, 0.0]),
		() => [true, true]
	)
	.add(
		isclose,
		() => isclose([1e-10, 1e-10], [1e-20, 0.999999e-10], undefined, 0.0),
		() => [false, true]
	);
