import { tester } from './core.mjs';

class NumberArray extends Array {}
class StringArray extends Array {}
class BooleanArray extends Array {}

let Any = x => x;

let lookup = new WeakMap();
export class Dtype {
	#array;
	constructor(type = Any, array = Array, name = `${type}`) {
		this.name = name;
		this.type = type;
		this.#array = array;

		lookup.set(type, name);
		lookup.set(array, name);
	}

	new(size, data = null) {
		let array = new this.#array(size);
		if (data != null) {
			if (array.set != undefined) {
				array.set(data);
			} else {
				for (let i = 0; i < data.length; i++) {
					array[i] = data[i];
				}
			}
		}
		return array;
	}

	toString() {
		return `dtype('${this.name}')`;
	}

	valueOf() {
		return this.type;
	}
}

let dtypes = {
	int8: new Dtype(Number, Int8Array, 'int8'),
	uint8: new Dtype(Number, Uint8Array, 'uint8'),
	int16: new Dtype(Number, Int16Array, 'int16'),
	uint16: new Dtype(Number, Uint16Array, 'uint16'),
	int32: new Dtype(Number, Int32Array, 'int32'),
	uint32: new Dtype(Number, Uint32Array, 'uint32'),
	float32: new Dtype(Number, Float32Array, 'float32'),
	float64: new Dtype(Number, Float64Array, 'float64'),

	// this is just a hinted container. no data conversion is involved.
	boolean: new Dtype(Boolean, BooleanArray, 'boolean'),
	number: new Dtype(Number, NumberArray, 'number'),
	string: new Dtype(String, StringArray, 'string'),
	object: new Dtype(Any, Array, 'object'),
};

Object.assign(dtypes, {
	int: dtypes.number,
	float: dtypes.number,
});

/**
 * @param {Dtype|string|Function} dtype
 * @param {function} array
 * @param {string} name
 * @returns {Dtype}
 * @example
 * dtype('number') == dtype(Number) // by string or value type function
 * @example
 * dtype('int8') == dtype(Int8Array) // by string or TypedArray constructor
 * @example
 * dtype('object') == dtype(Array) // default type and container
 * @example
 * dtype(dtype('object')) == dtype('object') // wraps dtype
 * @example
 * dtype() or dtype(null) // throws an error
 */
export function dtype(dtype = 'object', array = undefined, name = undefined) {
	// dtype ??= 'object';
	if (typeof dtype == 'string') {
		if (!Object.hasOwn(dtypes, dtype)) {
			throw new Error(`${dtype} is not supported`);
		}
		return dtypes[dtype];
	}
	if (dtype instanceof Dtype) return dtype;
	if (lookup.has(dtype)) return dtypes[lookup.get(dtype)];

	return (dtypes[name] = new Dtype(dtype, array, name));
}

export const _dtype = dtype;
export const dtype_ = dtype;

tester
	.add(
		dtype,
		() => dtype('number'),
		() => dtype('number')
	)
	.add(
		dtype,
		() => dtype(Number),
		() => dtype('number')
	)
	.add(
		dtype,
		() => dtype(Int16Array),
		() => dtype('int16')
	);
