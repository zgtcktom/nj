export function timeit2(func: any, duration?: number): void;
export function timeit(run: any, { name, setup, duration, warmup, cycle, cycle_duration, repeat, verbose, }?: {
    name?: string;
    setup?: any;
    duration?: number;
    warmup?: number;
    cycle?: string;
    cycle_duration?: number;
    repeat?: string;
    verbose?: boolean;
}): number;
export let tester: Tester;
declare class Tester {
    compare: typeof default_compare;
    tasks: {};
    _onload: any[];
    onload(fn: any): void;
    add(name: any, test: any, expected: any, compare?: typeof default_compare): Tester;
    run(name: any): any;
}
declare function default_compare(a: any, b: any): boolean;
export {};
