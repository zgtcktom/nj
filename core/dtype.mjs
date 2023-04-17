import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

class NumberArray extends Array {}
class StringArray extends Array {}
class BooleanArray extends Array {}

export class Dtype {
	constructor(name, clss) {
		this.name = name;
		this.class = clss;
	}

	new(...args) {
		return new this.class(...args);
	}

	toString() {
		return `dtype('${this.name}')`;
	}
}

let typedArray = {
	int8: Int8Array,
	uint8: Uint8Array,
	int16: Int16Array,
	uint16: Uint16Array,
	int32: Int32Array,
	uint32: Uint32Array,
	float32: Float32Array,
	float64: Float64Array,

	boolean: BooleanArray,
	number: NumberArray,
	string: StringArray,
	object: Array,
};

let dtypes = {
	int8: new Dtype('int8', Int8Array),
	uint8: new Dtype('uint8'),
	int16: new Dtype('int16'),
	uint16: new Dtype('uint16'),
	int32: new Dtype('int32'),
	uint32: new Dtype('uint32'),
	float32: new Dtype('float32'),
	float64: new Dtype('float64'),

	boolean: new Dtype('boolean'),
	number: new Dtype('number'),
	string: new Dtype('string'),
	object: new Dtype('object'),
};

tester
	.add(
		tester,
		() => 0,
		() => 1
	)
	.add(
		tester,
		() => 0,
		() => 1
	)
	.add(
		tester,
		() => 0,
		() => 1
	);
