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
export function dtype(dtype?: Dtype | string | Function, array?: Function, name?: string): Dtype;
/**
 * @class
 */
export class Dtype {
    /**
     *
     * @param {Function} type
     * @param {class} array
     * @param {string} name
     */
    constructor(type?: Function, array?: class, name?: string);
    /** @member {string} */
    name: string;
    /** @member {Function} */
    type: Function;
    new(size: any, data?: any): any;
    toString(): string;
    valueOf(): Function;
    #private;
}
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
export function dtype_(dtype?: Dtype | string | Function, array?: Function, name?: string): Dtype;
