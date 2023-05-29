export function toArray(obj: any): any;
/**
 * @param {number[]} shape
 * @param {number} ndim
 * @param {number} itemsize
 * @returns {number[]}
 * @ignore
 */
export function get_strides(shape: number[], ndim: number, itemsize: number): number[];
/**
 * @param {number[]} shape
 * @returns {number}
 * @ignore
 */
export function get_size(shape: number[]): number;
/**
 * @class
 */
export class NDArray {
    /**
     * @param {number[]} shape
     * @param {any[]} data
     * @param {Dtype} dtype
     * @param {NDArray} base
     * @param {number[]} strides
     * @param {number} offset
     * @param {number} itemsize always 1
     */
    constructor(shape: number[], data?: any[], dtype?: Dtype, base?: NDArray, strides?: number[], offset?: number, itemsize?: number);
    /** @member {number} */
    ndim: number;
    /** @member {number} */
    size: number;
    /** @member {number[]} */
    shape: number[];
    /** @member {any[]} */
    data: any[];
    /** @member {number} */
    itemsize: number;
    /** @member {number[]} */
    strides: number[];
    /** @member {number} */
    offset: number;
    /** @member {Dtype} */
    dtype: Dtype;
    /** @member {NDArray|null} */
    base: NDArray;
    /** @member {number} */
    get length(): number;
    set flat(arg: Flatiter);
    /**
     * @member {Flatiter}
     * @type {Flatiter}
     */
    get flat(): Flatiter;
    set T(arg: NDArray);
    /** @member {NDArray} */
    get T(): NDArray;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {any|string}
     */
    valueOf(): any | string;
    /**
     * Returns a view with the given shape, strides, and offset.
     *
     * out.base = this.base ?? this
     * @param {number[]} [shape]
     * @param {number[]} [strides]
     * @param {number} [offset] required as a ptr to the first item
     * @returns {NDArray}
     */
    as_strided(shape?: number[], strides?: number[], offset?: number): NDArray;
    /**
     * Returns `ndoffset(this.shape, this.strides, this.offset)`.
     *
     * Useful when iterating `this.data[i]` or `this.item(i)` in a `for (let i of this.keys())` loop.
     * @returns {NdoffsetIterator}
     */
    keys(): NdoffsetIterator;
    /**
     * Returns `this.flat`.
     * @returns {Flatiter}
     */
    values(): Flatiter;
    /**
     * Converts NDArray index to .data[] index.
     * @param {number|number[]|undefined} index
     * @returns {number}
     */
    idx(index: number | number[] | undefined): number;
    /**
     * `.at(0)` is is equivalent to `.get([0])`
     * @param  {...number|Slice|string|null|number[]|boolean[]|NDArray} indices
     * @returns {NDArray}
     */
    at(...indices: (number | Slice | string | null | number[] | boolean[] | NDArray)[]): NDArray;
    /**
     *
     * @param {number|null} [start = null]
     * @param {number|null} [end = null]
     * @returns {NDArray}
     */
    slice(start?: number | null, end?: number | null): NDArray;
    /**
     * `.get(indices)` is is equivalent to `.at(...indices)`
     * @param  {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
     * @param {number} [axis = 0]
     * @returns {NDArray}
     */
    get(indices: Array<number | Slice | string | null | number[] | boolean[] | NDArray>, axis?: number): NDArray;
    /**
     * `.set(value)` is equivalent to `.set(['...'], value)`, but faster
     * @param  {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
     * @param  {any} [value]
     * @returns {NDArray}
     */
    set(indices: Array<number | Slice | string | null | number[] | boolean[] | NDArray>, value?: any, ...args: any[]): NDArray;
    /**
     * Returns an element of the array.
     *
     * if `index` is an integer, `index` is regarded as a flatten index.
     *
     * `index` can be undefined only if `a.size == 1`.
     *
     * @param {number|number[]|undefined} index
     * @returns {any}
     */
    item(index: number | number[] | undefined): any;
    /**
     * Sets an element of the array.
     *
     * index can be undefined only if a.size == 1.
     * @param {number|number[]|undefined} index
     * @param {any} scalar
     * @returns {NDArray}
     */
    itemset(index: number | number[] | undefined, scalar: any): NDArray;
    /**
     * @param {Dtype} dtype
     * @param {boolean} [copy]
     * @returns {NDArray}
     */
    astype(dtype: Dtype, copy?: boolean): NDArray;
    /**
     * @returns {any[]|any}
     */
    array(): any[] | any;
    /**
     * @returns {any[]|any}
     */
    toarray(): any[] | any;
    /**
     * Alias of .toarray()
     * @returns {any[]|any}
     */
    tolist(): any[] | any;
    /**
     * `.reshape(1, 2)` is equivalent to `.reshape([1, 2])`
     * @param  {...number|number[]} shape
     * @returns {NDArray}
     */
    reshape(...shape: (number | number[])[]): NDArray;
    /**
     * Returns add(this, x, out)
     * @function
     * @param {NDArray} x
     * @param {null|NDArray} [out = null]
     * @returns {NDArray}
     * @example
     * x.add(a, x)
     * // in-place add
     */
    add(x: NDArray, out?: null | NDArray): NDArray;
    /**
     * Returns subtract(this, x, out)
     * @function
     * @param {NDArray} x
     * @param {null|NDArray} [out = null]
     * @returns {NDArray}
     */
    sub(x: NDArray, out?: null | NDArray): NDArray;
    /**
     * Returns multiply(this, x, out)
     * @function
     * @param {NDArray} x
     * @param {null|NDArray} [out = null]
     * @returns {NDArray}
     */
    mul(x: NDArray, out?: null | NDArray): NDArray;
    /**
     * Returns divide(this, x, out)
     * @function
     * @param {NDArray} x
     * @param {null|NDArray} [out = null]
     * @returns {NDArray}
     */
    div(x: NDArray, out?: null | NDArray): NDArray;
    /**
     * Returns mod(this, x, out)
     * @function
     * @param {NDArray} x
     * @param {null|NDArray} [out = null]
     * @returns {NDArray}
     */
    mod(x: NDArray, out?: null | NDArray): NDArray;
    /**
     * @param {number|number[]|null} axis
     * @param {NDArray} out
     * @param {boolean} keepdims
     * @param {boolean} initial
     * @param {boolean} return_scalar
     * @returns {NDArray<boolean>|boolean}
     */
    all(axis?: number | number[] | null, out?: NDArray, keepdims?: boolean, initial?: boolean, return_scalar?: boolean): NDArray<boolean> | boolean;
    /**
     * @param {number|number[]|null} axis
     * @param {NDArray} out
     * @param {boolean} keepdims
     * @param {boolean} initial
     * @param {boolean} return_scalar
     * @returns {NDArray<boolean>|boolean}
     */
    any(axis?: number | number[] | null, out?: NDArray, keepdims?: boolean, initial?: boolean, return_scalar?: boolean): NDArray<boolean> | boolean;
    /**
     * @param {number|null} [axis = null]
     * @param {NDArray|null} [out = null]
     * @param {boolean} [keepdims = false]
     * @returns {NDArray}
     */
    argmax(axis?: number | null, out?: NDArray | null, keepdims?: boolean): NDArray;
    /**
     * @param {number|null} [axis = null]
     * @param {NDArray|null} [out = null]
     * @param {boolean} [keepdims = false]
     * @returns {NDArray}
     */
    argmin(axis?: number | null, out?: NDArray | null, keepdims?: boolean): NDArray;
    argpartition(kth: any, axis?: number, kind?: string, order?: any): void;
    /**
     * @param {number} axis
     * @param {function} [key]
     * @returns {NDArray<number>}
     */
    argsort(axis?: number, key?: Function): any;
    byteswap(): void;
    choose(choices: any, out?: any, mode?: string): void;
    /**
     * @param {number|NDArray} a_min
     * @param {number|NDArray} a_max
     * @param {NDArray} out
     * @returns {NDArray}
     */
    clip(a_min: number | NDArray, a_max: number | NDArray, out?: NDArray): NDArray;
    /**
     * @param {boolean[]} condition
     * @param {number} [axis]
     * @param {NDArray} [out]
     * @returns {NDArray}
     */
    compress(condition: boolean[], axis?: number, out?: NDArray): NDArray;
    conj(): void;
    conjugate(): void;
    /**
     * @returns {NDArray}
     */
    copy(): NDArray;
    /**
     * @param {number} [axis]
     * @param {NDArray} [out]
     * @returns {NDArray}
     */
    cumprod(axis?: number, out?: NDArray): NDArray;
    /**
     * @param {number} [axis]
     * @param {NDArray} [out]
     * @returns {NDArray}
     */
    cumsum(axis?: number, out?: NDArray): NDArray;
    /**
     * @param {number} [offset]
     * @param {number} [axis1]
     * @param {number} [axis2]
     * @returns {NDArray}
     */
    diagonal(offset?: number, axis1?: number, axis2?: number): NDArray;
    dump(): void;
    dumps(): void;
    /**
     * @param {any} value
     * @returns {NDArray} this
     */
    fill(value: any): NDArray;
    /**
     * @returns {NDArray}
     */
    flatten(): NDArray;
    getfield(): void;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {boolean} [keepdims]
     * @param {any} [initial]
     * @param {boolean} [return_scalar]
     * @returns {NDArray<any>|any}
     */
    max(axis?: number | number[], out?: NDArray, keepdims?: boolean, initial?: any, return_scalar?: boolean): NDArray<any> | any;
    mean(axis?: any, out?: any, keepdims?: boolean): NDArray;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {boolean} [keepdims]
     * @param {any} [initial]
     * @param {boolean} [return_scalar]
     * @returns {NDArray|any}
     */
    min(axis?: number | number[], out?: NDArray, keepdims?: boolean, initial?: any, return_scalar?: boolean): NDArray | any;
    newbyteorder(): void;
    /**
     * @returns {NDArray[]}
     */
    nonzero(): NDArray[];
    partition(kth: any, axis?: number, kind?: string, order?: any): void;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {boolean} [keepdims]
     * @param {any} [initial]
     * @param {boolean} [return_scalar]
     * @returns {NDArray|any}
     */
    prod(axis?: number | number[], out?: NDArray, keepdims?: boolean, initial?: any, return_scalar?: boolean): NDArray | any;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {boolean} [keepdims]
     * @returns {NDArray}
     */
    ptp(axis?: number | number[], out?: NDArray, keepdims?: boolean): NDArray;
    /**
     * @param {number[]} indices
     * @param {any[]} values
     * @param {string} [mode]
     * @returns {NDArray} this
     */
    put(indices: number[], values: any[], mode?: string): NDArray;
    /**
     * @returns {NDArray}
     */
    ravel(): NDArray;
    /**
     * @param {number|number[]} repeats
     * @param {number} [axis]
     * @returns {NDArray}
     */
    repeat(repeats: number | number[], axis?: number): NDArray;
    /**
     * inplace resize
     * @param {number[]} new_shape
     * @returns {NDArray} this
     */
    resize(new_shape: number[]): NDArray;
    /**
     * @param {number} [decimals]
     * @param {NDArray} [out]
     * @returns {NDArray}
     */
    round(decimals?: number, out?: NDArray): NDArray;
    /**
     * @param {any[]} v
     * @param {string} [side]
     * @returns {NDArray}
     */
    searchsorted(v: any[], side?: string): NDArray;
    setfield(): void;
    setflags(): void;
    /**
     * @param {number} [axis]
     * @param {Function} [key]
     * @returns {NDArray} this
     */
    sort(axis?: number, key?: Function): NDArray;
    /**
     * @param {number|number[]} axis
     * @returns {NDArray}
     */
    squeeze(axis?: number | number[]): NDArray;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {number} [ddof]
     * @param {boolean} [keepdims]
     * @returns {NDArray}
     */
    std(axis?: number | number[], out?: NDArray, ddof?: number, keepdims?: boolean): NDArray;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {boolean} [keepdims]
     * @param {number} [initial]
     * @param {boolean} [return_scalar]
     * @returns {NDArray|any}
     */
    sum(axis?: number | number[], out?: NDArray, keepdims?: boolean, initial?: number, return_scalar?: boolean): NDArray | any;
    /**
     * @param {number} axis1
     * @param {number} axis2
     * @returns {NDArray}
     */
    swapaxes(axis1: number, axis2: number): NDArray;
    /**
     * @param {number[]} indices
     * @param {number} [axis]
     * @param {NDArray} [out]
     * @param {string} [mode]
     * @returns {NDArray}
     */
    take(indices: number[], axis?: number, out?: NDArray, mode?: string): NDArray;
    tobytes(): void;
    tofile(): void;
    trace(): void;
    /**
     * @param {number|number[]} [axes]
     * @returns {NDArray}
     */
    transpose(axes?: number | number[]): NDArray;
    /**
     * @param {number|number[]} [axis]
     * @param {NDArray} [out]
     * @param {number} [ddof]
     * @param {boolean} [keepdims]
     * @returns {NDArray}
     */
    variance(axis?: number | number[], out?: NDArray, ddof?: number, keepdims?: boolean): NDArray;
    [Symbol.iterator](): Generator<NDArray, void, unknown>;
}
import { Dtype } from './core.mjs';
import { Flatiter } from './core.mjs';
import { NdoffsetIterator } from './core.mjs';
import { Slice } from './core.mjs';
