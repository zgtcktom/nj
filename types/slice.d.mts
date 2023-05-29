/**
 * Create a Slice instance
 * @param {number|string|null|Array<number|null>} [start]
 * @param {number} [stop]
 * @param {number} [step]
 * @returns {Slice}
 * @example
 * // returns Slice.ellipsis
 * slice('...')
 * @example
 * // returns Slice.colon
 * slice()
 * @example
 * // returns new Slice(1, null, null)
 * slice(1)
 * @example
 * // returns slice(null, null, -1)
 * slice('::-1')
 * @example
 * // returns slice(null, -1, 1)
 * slice(':-1')
 * @example
 * // returns slice(null, null, 1)
 * slice([,,1])
 */
export function slice(start?: number | string | null | Array<number | null>, stop?: number, step?: number): Slice;
export namespace slice {
    import newaxis = Slice.newaxis;
    export { newaxis };
    import ellipsis = Slice.ellipsis;
    export { ellipsis };
    import colon = Slice.colon;
    export { colon };
}
/** @class */
export class Slice {
    /** @member {null} */
    static newaxis: any;
    /** @member {Slice} */
    static ellipsis: Slice;
    /** @member {Slice} */
    static colon: Slice;
    /**
     * @param {number|null} start
     * @param {number|null} stop
     * @param {number|null} step
     */
    constructor(start: number | null, stop: number | null, step: number | null);
    /** @member {number|null} */
    start: number;
    /** @member {number|null} */
    stop: number;
    /** @member {number|null} */
    step: number;
    /**
     * Returns `{start, stop, step, slicelength}` given the length of a sequence.
     *
     * `this.stop` must be non-null if `length` is null.
     *
     * Refer to: https://svn.python.org/projects/python/branches/pep-0384/Objects/sliceobject.c.
     *
     * @param {number|null} [length]
     * @returns {SliceIterator}
     * @example
     * // returns [0, 2, 4, 6]
     * [...slice(0, 10, 2).indices(7)]
     * @example
     * // returns 4
     * slice(0, 10, 2).indices(7).slicelength
     */
    indices(length?: number | null): SliceIterator;
    toString(): string;
}
/** @class */
declare class SliceIterator {
    /**
     * @param {number} start
     * @param {number} stop
     * @param {number} step
     * @param {number} slicelength
     */
    constructor(start: number, stop: number, step: number, slicelength: number);
    /** @member {number} */
    start: number;
    /** @member {number} */
    stop: number;
    /** @member {number} */
    step: number;
    /** @member {number} */
    slicelength: number;
    reset(): void;
    /**
     * @typedef {Object} SliceIteratorResult
     * @property {number} value
     * @property {boolean} done
     */
    /**
     * @returns {SliceIteratorResult}
     */
    next(): {
        value: number;
        done: boolean;
    };
    [Symbol.iterator](): SliceIterator;
    #private;
}
export {};
