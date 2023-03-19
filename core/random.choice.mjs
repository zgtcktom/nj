import { arange, asarray, count_nonzero, divide, NDArray, sum, tester } from './core.mjs';

function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

function _choice(accum, upper = 1) {
	let r = Math.random() * upper;
	for (let i = 1; i < accum.length; i++) {
		if (r < accum[i]) return i - 1;
	}
	return accum.length - 1;
}

function _accum(p, accum) {
	accum[0] = 0;
	for (let i = 1; i < p.length; i++) {
		accum[i] = accum[i - 1] + p[i - 1];
	}
	return accum;
}

export function choice(a, shape = null, replace = true, p = null) {
	if (typeof a == 'number') a = arange(a);
	else a = asarray(a);

	if (a.ndim != 1) throw `'p' must be 1-dimensional`;
	if (a.size == 0) throw `'a' cannot be empty unless no samples are taken`;

	if (p == null) {
		p = Array(a.size).fill(1 / a.size);
	} else {
		p = asarray(p);
		if (p.ndim != 1) throw `'p' must be 1-dimensional`;
		if (p.size != a.size) throw `'a' and 'p' must have same size`;
		p = divide(p, sum(p));
		p = p.toarray();
	}
	let accum = Array(p.length);
	_accum(p, accum);
	// console.log(accum);

	a = a.toarray();

	if (shape == null) return a[_choice(accum)];
	if (typeof shape == 'number') shape = [shape];

	let size = get_size(shape);

	if (count_nonzero(p) < size) throw `Fewer non-zero entries in p than size`;

	let data = Array(size);

	if (replace) {
		for (let i = 0; i < size; i++) {
			data[i] = a[_choice(accum)];
		}
	} else {
		let upper = 1;
		for (let i = 0; i < size; i++) {
			let choice = _choice(accum, upper);
			upper -= p[choice];
			p[choice] = 0;
			_accum(p, accum);
			data[i] = a[choice];
		}
	}

	return new NDArray(shape, data);
}

// tester
// 	.add(
// 		choice,
// 		() => choice(5, 3),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 3, true, [0.2, 0.1, 0.6, 1.2, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 3, true, [0.2, 0.1, 0.6, 0, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 3, true, [0.2, 0.1, 0, 0.5, 0]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 5, false, [0.2, 0.1, 0.6, 0, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 4, false, [0.2, 0.1, 0.8, 0.22, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, null, false, [0.2, 0.1, 0.8, 0.22, 0.5]),
// 		() => 0
// 	);
