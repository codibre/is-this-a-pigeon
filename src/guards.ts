import {
	AnyIterable,
	Class,
	Func,
	Lenghtable,
	Nullable,
	ObjectKeyType,
	Sizeable,
} from './types';

export function isPromiseLike(t: any): t is PromiseLike<any> {
	return !!(t && typeof t.then === 'function');
}

export function isPromise(t: any): t is Promise<any> {
	return t instanceof Promise;
}

export function isIterable(value: any): value is Iterable<any> {
	return value && typeof value[Symbol.iterator] === 'function';
}

export function isFulfilled<T>(
	value: PromiseSettledResult<T>,
): value is PromiseFulfilledResult<T> {
	return value.status === 'fulfilled';
}

export function isRejected<T>(
	value: PromiseSettledResult<T>,
): value is PromiseRejectedResult {
	return value.status === 'fulfilled';
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

export function isAnyIterable(value: any): value is AnyIterable<any> {
	return (
		value &&
		(typeof value[Symbol.iterator] === 'function' ||
			typeof value[Symbol.asyncIterator] === 'function')
	);
}

export function isString(t: any): t is string {
	return typeof t === 'string';
}

export function isProperty<K extends string | number | symbol, T>(
	t: any,
	prop: K,
	validation: (p: any) => p is T,
): t is { [k in K]: T } {
	return prop in t && validation(t[prop]);
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

export function isObject(t: unknown): t is {} {
	return t !== null && typeof t === 'object';
}

export function isNull<T>(t: Nullable<T>): t is null {
	return t === null;
}

export function isUndefined<T>(t: Nullable<T>): t is undefined {
	return t === undefined;
}

export function isNullish<T>(t: Nullable<T>): t is null {
	return t == null || t === undefined;
}

export function isNonNullish<T>(t: Nullable<T>): t is NonNullable<T> {
	return t !== null && t !== undefined;
}

export function hasProperty<T extends object, K extends keyof T>(
	t: T,
	prop: K,
): t is T & {
	[k in K]: NonNullable<T[K]>;
};
export function hasProperty<P extends ObjectKeyType>(
	t: unknown,
	prop: P,
): t is {
	[k in P]: unknown;
};
export function hasProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): t is {
	[k in P]: unknown;
} {
	return t && t[prop] !== undefined;
}

export function hasTruthyProperty<T extends object, K extends keyof T>(
	t: T,
	prop: K,
): t is T & {
	[k in K]: NonNullable<T[k]>;
};
export function hasTruthyProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): t is {
	[k in P]: unknown;
};
export function hasTruthyProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): t is {
	[k in P]: unknown;
} {
	return t && !!t[prop];
}

export function hasProperties<T extends object, K extends keyof T>(
	t: T,
	...args: K[]
): t is T & {
	[k in K]: NonNullable<T[k]>;
};
export function hasProperties<T extends ObjectKeyType>(
	t: any,
	...args: T[]
): t is {
	[k in T]: unknown;
};
export function hasProperties<T extends ObjectKeyType>(
	t: any,
	...args: T[]
): t is {
	[k in T]: unknown;
} {
	return t && args.every((x) => t[x] !== undefined);
}

export function hasTruthyProperties<T extends ObjectKeyType>(
	t: any,
	...args: T[]
): t is {
	[k in T]: unknown;
} {
	return t && args.every((x) => t[x]);
}

export function hasMethod<T extends ObjectKeyType>(
	t: any,
	method: T,
): t is {
	[k in T]: Func;
} {
	return t && isFunction(t[method]);
}

export function hasMethods<T extends ObjectKeyType>(
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

export function isKeyOf<T extends Object>(
	key: string | number | symbol,
	target: T,
): key is keyof T {
	return target && hasProperty(target, key);
}

export function isClass(object: any): object is Class<any> {
	return typeof object === 'function' && typeof object.prototype === 'object';
}

export function isFalsy(t: any): boolean {
	return !t;
}

export function isTruthy(t: any): boolean {
	return !!t;
}
