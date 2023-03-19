export class Slice {
	static newaxis = null;
	static ellipsis = new Slice();
	static colon = new Slice();

	static ['None'] = Slice.newaxis;
	static ['...'] = Slice.ellipsis;
	static [':'] = Slice.colon;

	constructor(start = null, stop = null, step = null) {
		this.start = start;
		this.stop = stop;
		this.step = step;
	}

	get(length) {
		// https://svn.python.org/projects/python/branches/pep-0384/Objects/sliceobject.c
		let { start, stop, step } = this;
		if (step == null) {
			step = 1;
		}

		let defstart = step < 0 ? length - 1 : 0;
		let defstop = step < 0 ? -1 : length;

		if (start == null) {
			start = defstart;
		} else {
			if (start < 0) start += length;
			if (start < 0) start = step < 0 ? -1 : 0;
			if (start >= length) start = step < 0 ? length - 1 : length;
		}

		if (stop == null) {
			stop = defstop;
		} else {
			if (stop < 0) stop += length;
			if (stop < 0) stop = step < 0 ? -1 : 0;
			if (stop >= length) stop = step < 0 ? length - 1 : length;
		}

		let slicelength;
		if (step == 0 || (step < 0 && stop >= start) || (step > 0 && start >= stop)) {
			slicelength = 0;
		} else if (step < 0) {
			slicelength = ((stop - start + 1) / step + 1) | 0;
		} else {
			slicelength = ((stop - start - 1) / step + 1) | 0;
		}
		return { start, stop, step, slicelength };
	}

	toString() {
		if (this == Slice.ellipsis) return '...';
		if (this == Slice.colon) return ':';
		let { start, stop, step } = this;
		if (step == null) {
			if (start == null && stop == null) return ':';
			return `${start ?? ''}:${stop ?? ''}`;
		}
		return `${start ?? ''}:${stop ?? ''}:${step}`;
	}
}

function slice(start, stop, step) {
	if (start == null && stop == null && step == null) return Slice.colon;
	if (typeof start == 'string') {
		if (Object.hasOwn(Slice, start)) return Slice[start];
		let args = start.split(':');
		// console.log(args);
		if (args.length == 1) {
			let [start] = args;

			if (start.length == 0) start = null;
			else if (Number.isInteger(+start)) start = +start;
			else throw `${start} cannot be cast to integer`;

			return new Slice(start);
		}
		if (args.length == 2) {
			let [start, stop] = args;

			if (start.length == 0) start = null;
			else if (Number.isInteger(+start)) start = +start;
			else throw `${start} cannot be cast to integer`;

			if (stop.length == 0) stop = null;
			else if (Number.isInteger(+stop)) stop = +stop;
			else throw `${stop} cannot be cast to integer`;

			return new Slice(start, stop);
		}
		if (args.length == 3) {
			let [start, stop, step] = args;

			if (start.length == 0) start = null;
			else if (Number.isInteger(+start)) start = +start;
			else throw `${start} cannot be cast to integer`;

			if (stop.length == 0) stop = null;
			else if (Number.isInteger(+stop)) stop = +stop;
			else throw `${stop} cannot be cast to integer`;

			if (step.length == 0) step = null;
			else if (Number.isInteger(+step)) step = +step;
			else throw `${step} cannot be cast to integer`;

			return new Slice(start, stop, step);
		}
		throw `invalid string slice representation ${start}`;
	}
	if (start?.length != undefined) {
		({ 0: start, 1: stop, 2: step } = start);
	}
	return new Slice(start, stop, step);
}

Object.assign(slice, { colon: Slice.colon }, Slice);

slice.colon = Slice.colon;

slice.is = function (obj) {
	return obj instanceof Slice;
};

export { slice };
