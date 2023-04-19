import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax, diagonal } from './core.mjs';

export function diag(v, k = 0) {
	v = asarray(v);
	let s = v.shape;
	if (s.length == 1) {
		let n = s[0] + Math.abs(k);
		let res = zeros([n, n]);
		let i = k >= 0 ? k : -k * n;
		let view = res.at(slice(null, n - k));
		for (let j = 0; j < v.size; j++, i += n + 1) {
			view.itemset(i, v.item(j));
		}
		return res;
	}
	if (s.length != 2) throw `Input must be 1- or 2-d.`;
	return diagonal(v, k);
}

tester
	.add(
		diag,
		() => diag(arange(9).reshape([3, 3])),
		() => array([0, 4, 8])
	)
	.add(
		diag,
		() => diag(arange(9).reshape([3, 3]), 1),
		() => array([1, 5])
	)
	.add(
		diag,
		() => diag(arange(9).reshape([3, 3]), -1),
		() => array([3, 7])
	)
	.add(
		diag,
		() => diag(diag(arange(9).reshape([3, 3]))),
		() =>
			array([
				[0, 0, 0],
				[0, 4, 0],
				[0, 0, 8],
			])
	);
