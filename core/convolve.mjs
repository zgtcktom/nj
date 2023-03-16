import { tester, array, NDArray, atleast_1d } from './core.mjs';

export function convolve(a, v, mode = 'full') {
	a = atleast_1d(a);
	v = atleast_1d(v);
	if (a.size == 0) throw 'a cannot be empty';
	if (v.size == 0) throw 'v cannot be empty';
	if (a.ndim > 1 || v.ndim > 1) throw 'object too deep for desired array';
	if (v.ndim > a.ndim) {
		let tmp = a;
		a = v;
		v = tmp;
	}
	let length = a.size;
	if (mode == 'valid') length += 1 - v.size;
	else if (mode == 'full') length += v.size - 1;
	else if (mode != 'same') throw `mode must be one of 'valid', 'same', or 'full' (got '${mode}')`;
	let data = Array(length);
	let ind = 0;
	if (mode != 'valid') {
		for (let i = 0; i < v.size - 1; i++) {
			let sum = 0;
			for (let j = i + 1, k = 0; j--; k++) {
				sum += a.item(k) * v.item(j);
			}
			data[ind++] = sum;
		}
	}
	for (let i = 0; i < a.size + 1 - v.size; i++) {
		let sum = 0;
		for (let j = 0, k = v.size - 1; j < v.size; j++, k--) sum += a.item(i + j) * v.item(k);
		data[ind++] = sum;
	}
	if (mode != 'valid') {
		for (let i = 0; i < v.size - 1; i++) {
			let sum = 0;
			for (let j = 0; j < v.size - 1 - i; j++) {
				sum += a.item(a.size - v.size + 1 + i + j) * v.item(v.size - 1 - j);
			}
			data[ind++] = sum;
		}
	}
	if (mode == 'same') data = data.slice(((v.size - 1) / 2) | 0, (((v.size - 1) / 2) | 0) + length);
	return new NDArray([length], data);
}

console.log(atleast_1d(10));

tester
	.add(
		convolve,
		() => convolve([1, 2, 3], [0, 1, 0.5]),
		() => array([0, 1, 2.5, 4, 1.5])
	)
	.add(
		convolve,
		() => convolve([1, 2, 3], [1, 0.5], 'full'),
		() => array([1, 2.5, 4, 1.5])
	)
	.add(
		convolve,
		() => convolve([1, 2, 3], [0, 1, 0.5], 'same'),
		() => array([1, 2.5, 4])
	)
	.add(
		convolve,
		() => convolve([1, 2, 3], [0, 1, 0.5], 'valid'),
		() => array([2.5])
	);
