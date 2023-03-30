import { NDArray } from './core.mjs';

function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

export function random_sample(shape = null) {
	if (shape == null) return Math.random();
	if (typeof shape == 'number') shape = [shape];
	let size = get_size(shape);
	let data = Array(size);
	for (let i = 0; i < size; i++) {
		data[i] = Math.random();
	}
	return new NDArray(shape, data);
}

// export const random = random_sample;
export const ranf = random_sample;
export const sample = random_sample;

// console.log(random_sample([3, 2]));
