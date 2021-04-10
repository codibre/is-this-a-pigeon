import { Func, Lenghtable, Sizeable } from './types';

export function isPromiseLike(t: any): t is PromiseLike<any> {
	return !!(t && typeof t.then === 'function');
}

export function isPromise(t: any): t is Promise<any> {
	return t instanceof Promise;
}

export function isIterable(value: any): value is Iterable<any> {
	return value && typeof value[Symbol.iterator] === 'function';
}

export function isOnlyIterable(value: any): value is Iterable<any> {
	return (
		value &&
		typeof value !== 'string' &&
		typeof value.size !== 'number' &&
		typeof value.length !== 'number' &&
		isIterable(value)
	);
}

export function isAsyncIterable(value: any): value is AsyncIterable<any> {
	return !!(value && typeof value[Symbol.asyncIterator] === 'function');
}

export function isAnyIterable(
	value: any,
): value is Iterable<any> | AsyncIterable<any> {
	return (
		value &&
		(typeof value[Symbol.iterator] === 'function' ||
			typeof value[Symbol.asyncIterator] === 'function')
	);
}

export function isString(t: any): t is string {
	return typeof t === 'string';
}

export function isNumber(t: any): t is number {
	return typeof t === 'number';
}

export function isBoolean(t: any): t is number {
	return typeof t === 'boolean';
}

export function isFunction(t: any): t is Func {
	return typeof t === 'function';
}

export function isNull(t: any): t is null {
	return t === null;
}

export function isFalsy(t: any): boolean {
	return !t;
}

export function isTruthy(t: any): boolean {
	return !!t;
}

export function hasProperty<P extends string | symbol | number>(
	t: any,
	prop: P,
): t is {
	[k in P]: unknown;
} {
	return t && t[prop] !== undefined;
}

export function hasTruthyProperty<P extends string | symbol | number>(
	t: any,
	prop: P,
): t is {
	[k in P]: unknown;
} {
	return t && !!t[prop];
}

export function hasProperties<T extends string | symbol | number>(
	t: any,
	...args: T[]
): t is {
	[k in T]: unknown;
} {
	return t && args.every((x) => t[x] !== undefined);
}

export function hasTruthyProperties<T extends string | symbol | number>(
	t: any,
	...args: T[]
): t is {
	[k in T]: unknown;
} {
	return t && args.every((x) => t[x]);
}

export function hasMethod<T extends string | symbol | number>(
	t: any,
	method: T,
): t is {
	[k in T]: Func;
} {
	return t && isFunction(t[method]);
}

export function hasMethods<T extends string | symbol | number>(
	t: any,
	...args: T[]
): t is {
	[k in T]: Func;
} {
	return t && args.every((x) => isFunction(t[x]));
}

export const isArray: (a: unknown) => a is any[] = Array.isArray;

export function hasSize(x: unknown): x is Sizeable {
	return hasProperty(x, 'size');
}

export function hasLength(x: unknown): x is Lenghtable {
	return hasProperty(x, 'length');
}
