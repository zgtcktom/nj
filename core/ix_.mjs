import { tester, array, asarray, NDArray, nonzero } from './core.mjs';

/**
 * @param  {...number[]|boolean[]} args
 * @returns {NDArray[]}
 */
export function ix_(...args) {
	let out = [];
	let nd = args.length;
	for (let k = 0; k < nd; k++) {
		let idx = args[k];
		idx = asarray(idx);
		if (idx.ndim != 1) {
			`cross index must be 1 dimensional`;
		}
		if (typeof idx.item(0) == 'boolean') {
			[idx] = nonzero(idx);
		}
		idx = idx.reshape([...Array(k).fill(1), idx.size, ...Array(nd - k - 1).fill(1)]);
		out.push(idx);
	}
	return out;
}

process.env.PRODUCTION ||
	tester
		.add(
			ix_,
			() => ix_([0, 1], [2, 4]),
			() => [array([[0], [1]]), array([[2, 4]])]
		)
		.add(
			ix_,
			() => ix_([true, true], [2, 4]),
			() => [array([[0], [1]]), array([[2, 4]])]
		)
		.add(
			ix_,
			() => ix_([true, true], [false, false, true, false, true]),
			() => [array([[0], [1]]), array([[2, 4]])]
		);
