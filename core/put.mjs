import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	amax,
	normalize_axis_index,
} from './core.mjs';

function _normalize_indices_raise(indices, size, throw_axis) {
	let out = Array(indices.length);
	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i];
		if (idx < 0) idx += size;
		if (idx < 0 || idx >= size) {
			throw `index ${indices[i]} is out of bounds for axis ${throw_axis} with size ${size}`;
		}
		out[i] = idx;
	}
	return out;
}

function _normalize_indices_wrap(indices, size) {
	let out = Array(indices.length);
	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i] % size;
		if (idx < 0) idx += size;
		out[i] = idx;
	}
	return out;
}

function _normalize_indices_clip(indices, size) {
	let out = Array(indices.length);
	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i];
		out[i] = Math.max(0, Math.min(idx, size - 1));
	}
	return out;
}

export function _normalize_indices(indices, mode, size, throw_axis) {
	if (mode == 'raise') return _normalize_indices_raise(indices, size, throw_axis);
	if (mode == 'wrap') return _normalize_indices_wrap(indices, size);
	if (mode == 'clip') return _normalize_indices_clip(indices, size);

	throw `unexpected mode ${mode}`;
}

export function put(a, ind, v, mode = 'raise') {
	if (typeof ind == 'number') ind = [ind];
	if (typeof v == 'number') v = [v];

	ind = _normalize_indices(ind, mode, a.size, 0);
	let flat = a.flat;
	let n = v.length;
	for (let i = 0; i < ind.length; i++) {
		flat.set(ind[i], v[i % n]);
	}
}

tester
	.add(
		put,
		() => {
			let a = arange(5);
			put(a, [0, 2], [-44, -55]);
			return a;
		},
		() => array([-44, 1, -55, 3, 4])
	)
	.add(
		put,
		() => {
			let a = arange(5);
			put(a, 22, -5, 'clip');
			return a;
		},
		() => array([0, 1, 2, 3, -5])
	);
