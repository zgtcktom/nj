import { tester, NDArray, slice, array, asarray } from './core.mjs';

function is_tuple(value) {
	return value?.length != undefined;
}

export class Flatiter {
	constructor(base) {
		this.base = base;
		this.index = 0;
		this.coords = Array(base.ndim).fill(0);
	}

	[Symbol.iterator]() {
		return this;
	}

	next() {
		let { coords, base } = this;
		let { shape, size } = base;
		let value = base.item(coords);
		for (let j = coords.length - 1; j >= 0; j--) {
			coords[j] += 1;
			if (coords[j] < shape[j]) break;
			if (j > 0) coords[j] -= shape[j];
		}
		let done = this.index >= size;
		this.index++;
		return { value, done };
	}

	get(index) {
		if (is_tuple(index)) {
			let data = [];
			for (let i = 0; i < index.length; i++) {
				data[i] = this.base.item(index[i]);
			}
			return new NDArray([index.length], data);
		}
		return this.base.item(index);
	}

	set(index, value) {
		if (is_tuple(index)) {
			if (is_tuple(value)) {
				value = asarray(value).flatten().data;
				for (let i = 0; i < index.length; i++) this.base.itemset(index[i], value[i % value.length]);
			} else {
				for (let i = 0; i < index.length; i++) this.base.itemset(index[i], value);
			}
			return;
		}
		if (is_tuple(value)) throw 'Error setting single item of array';
		this.base.itemset(index, value);
	}

	copy() {
		return this.base.flatten();
	}
}

tester
	.add(
		'Flatiter',
		() => {
			let array = new NDArray([2, 3], [0, 1, 2, 3, 4, 5]);
			let a = new Flatiter(array);
			let out = [];
			// console.log(a.next());
			for (let item of a) {
				for (let h of a) {
					out.push(h);
				}
				out.push(item);
			}
			return out;
		},
		() => [1, 2, 3, 4, 5, 0]
	)
	.add(
		'Flatiter',
		() => {
			let array = new NDArray([3, 1], [0, 1, 2]);
			let a = new Flatiter(array);
			let out = [];
			for (let item of a) {
				out.push(item, a.index, [...a.coords]);
			}
			return out;
		},
		() => [0, 1, [1, 0], 1, 2, [2, 0], 2, 3, [3, 0]]
	)
	.add(
		'Flatiter',
		() => {
			let array = new NDArray([1, 2], [0, 1]);
			let a = new Flatiter(array);
			let out = [];
			for (let item of a) {
				for (let h of new Flatiter(array)) {
					out.push(h, a.index, [...a.coords]);
				}
				out.push(item, a.index, [...a.coords]);
			}
			return out;
		},
		() => [0, 1, [0, 1], 1, 1, [0, 1], 0, 1, [0, 1], 0, 2, [1, 0], 1, 2, [1, 0], 1, 2, [1, 0]]
	);

`   a = np.arange(2).reshape(1, -1)
    c=a.flat
    for item in c:
        for b in a.flat:
            print(b,c.index,c.coords)
        print(item,c.index,c.coords)`;

tester
	.add(
		'Flatiter.get',
		() =>
			new Flatiter(
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
			).get(3),
		() => 4
	)
	.add(
		'Flatiter.get',
		() =>
			new Flatiter(
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
			).get([3, 4, -1]),
		() => [4, 5, 6]
	);

tester.add(
	'Flatiter.set',
	() => {
		let x = array([
			[3, 3, 3],
			[3, 3, 3],
		]);
		new Flatiter(x).set([1, -1], [[1], [2]]);
		return x;
	},
	() => [
		[3, 1, 3],
		[3, 3, 2],
	]
);

tester.add(
	'Flatiter.copy',
	() => new Flatiter(new NDArray([2, 3], [0, 1, 2, 3, 4, 5]).get(slice([, , -1]))).copy(),
	() => [3, 4, 5, 0, 1, 2]
);
