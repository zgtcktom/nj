/**
 * @param  {...null|number|Slice|string} args
 * @returns {Array<null|number|Slice|string>}
 */
export function index_exp(...args: (null | number | Slice | string)[]): Array<null | number | Slice | string>;
/**
 * @param  {...null|number|Slice|string|Array<null|number|Slice|string>} args
 * @returns {Array<null|number|Slice|string>}
 */
export function s_(...args: (null | number | Slice | string | Array<null | number | Slice | string>)[]): Array<null | number | Slice | string>;
export const tupleType: unique symbol;
import { Slice } from './core.mjs';
