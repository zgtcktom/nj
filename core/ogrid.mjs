import { tester, arange, array, asarray, ones, zeros, slice, NDArray } from './core.mjs';

export function ogrid(...slices) {
	let out = [];
	for (let i = 0; i < slices.length; i++) {
		let { start, stop, step, slicelength } = slices[i].indices();
		let data = Array(slicelength);
		for (let i = 0; i < slicelength; i++) {
			data[i] = start + i * step;
		}
		let shape = Array(slices.length).fill(1);
		shape[i] = slicelength;
		out.push(new NDArray(shape, data));
	}
	return out;
}

tester
	.add(
		ogrid,
		() => ogrid(slice('0:5'), slice('0:5')),
		() => [array([[0], [1], [2], [3], [4]]), array([[0, 1, 2, 3, 4]])]
	)
	.add(
		ogrid,
		() => ogrid(slice('3:5'), slice('0:-5'), slice('0:1')),
		() => [array([[[3]], [[4]]]), array([]).reshape([1, 0, 1]), array([[[0]]])]
	);
