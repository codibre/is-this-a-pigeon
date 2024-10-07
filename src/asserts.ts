import {
	hasLength,
	hasSize,
	isAnyIterable,
	isArray,
	isAsyncIterable,
	isBoolean,
	isClass,
	isFunction,
	isIterable,
	isNull,
	isNullish,
	isNumber,
	isOnlyIterable,
	isPromise,
	isPromiseLike,
	isString,
	isUndefined,
} from './guards';
import {
	AnyIterable,
	Class,
	Func,
	KeysOfType,
	Lenghtable,
	Nullable,
	ObjectKeyType,
	Sizeable,
} from './types';

type AssertError = string | Func<[], unknown>;

function throwError(errorCallOrMessage: AssertError): never {
	throw typeof errorCallOrMessage === 'function'
		? errorCallOrMessage()
		: new TypeError(errorCallOrMessage);
}

export function assert<T, R extends T>(
	v: T,
	check: (x: T) => x is R,
	errorCallOrMessage?: AssertError,
): asserts v is R {
	if (!check(v)) throwError(errorCallOrMessage ?? 'invalid type');
}

export function assertAndGet<T, R extends T>(
	v: T,
	check: (x: T) => x is R,
	errorCallOrMessage?: AssertError,
): R {
	assert(v, check, errorCallOrMessage);
	return v;
}

export function assertNot<T, R extends T>(
	v: T,
	check: (x: T) => x is R,
	errorCallOrMessage?: AssertError,
): asserts v is Exclude<T, R> {
	if (check(v)) throwError(errorCallOrMessage ?? 'invalid type');
}

export function assertProperty<
	T extends object,
	K extends keyof T,
	R extends T[K],
>(
	v: T,
	k: K,
	check: (x: T[K]) => x is R,
	errorCallOrMessage?: AssertError,
): asserts v is T & { [x in K]: R } {
	if (!check(v[k]))
		throwError(errorCallOrMessage ?? `invalid property ${k.toString()}`);
}

export function assertProperties<
	T extends object,
	K extends keyof T,
	R extends T[K],
>(
	v: T,
	keys: K[],
	check: (x: T[K]) => x is R,
	errorCallOrMessage?: AssertError,
): asserts v is T & { [x in K]: R } {
	for (const k of keys) assertProperty(v, k, check, errorCallOrMessage);
}

export function assertNotProperties<
	T extends object,
	K extends keyof T,
	R extends T[K],
>(
	v: T,
	keys: K[],
	check: (x: T[K]) => x is R,
	errorCallOrMessage?: AssertError,
): asserts v is T & { [x in K]: R } {
	for (const k of keys) assertNotProperty(v, k, check, errorCallOrMessage);
}

export function assertAndGetProperty<
	T extends object,
	K extends keyof T,
	R extends T[K],
>(v: T, k: K, check: (x: T[K]) => x is R, errorCallOrMessage?: AssertError): R {
	const value = v[k];
	if (!check(value)) {
		throwError(errorCallOrMessage ?? `invalid property ${k.toString()}`);
	}
	return value;
}

export function assertNotProperty<T, K extends keyof T, R extends T[K]>(
	v: T,
	k: K,
	check: (x: T[K]) => x is R,
	errorCallOrMessage?: AssertError,
): asserts v is T & { [x in K]: Exclude<T[K], R> } {
	if (check(v[k]))
		throwError(errorCallOrMessage ?? `invalid property ${k.toString()}`);
}

export function assertPromiseLike(
	t: any,
	errorCallOrMessage: AssertError = 'invalid PromiseLike',
): asserts t is PromiseLike<any> {
	assert(t, isPromiseLike, errorCallOrMessage);
}

export function assertPromise(
	t: any,
	errorCallOrMessage: AssertError = 'invalid Promise',
): asserts t is Promise<any> {
	assert(t, isPromise, errorCallOrMessage);
}

export function assertIterable(
	value: any,
	errorCallOrMessage: AssertError = 'invalid Iterable',
): asserts value is Iterable<any> {
	assert(value, isIterable, errorCallOrMessage);
}

export function assertOnlyIterable(
	value: any,
	errorCallOrMessage: AssertError = 'invalid only Iterable',
): asserts value is Iterable<any> {
	assert(value, isOnlyIterable, errorCallOrMessage);
}

export function assertAsyncIterable(
	value: any,
	errorCallOrMessage: AssertError = 'invalid AsyncIterable',
): asserts value is AsyncIterable<any> {
	assert(value, isAsyncIterable, errorCallOrMessage);
}

export function assertAnyIterable(
	value: any,
	errorCallOrMessage: AssertError = 'invalid any Iterable',
): asserts value is AnyIterable<any> {
	assert(value, isAnyIterable, errorCallOrMessage);
}

export function assertString(
	t: any,
	errorCallOrMessage: AssertError = 'invalid string',
): asserts t is string {
	assert(t, isString, errorCallOrMessage);
}

export function assertNumber(
	t: any,
	errorCallOrMessage: AssertError = 'invalid number',
): asserts t is number {
	assert(t, isNumber, errorCallOrMessage);
}

export function assertBoolean(
	t: any,
	errorCallOrMessage: AssertError = 'invalid boolean',
): asserts t is number {
	assert(t, isBoolean, errorCallOrMessage);
}

export function assertFunction(
	t: any,
	errorCallOrMessage: AssertError = 'invalid function',
): asserts t is Func {
	assert(t, isFunction, errorCallOrMessage);
}

export function assertNull<T>(
	t: T | null,
	errorCallOrMessage: AssertError = 'non null value',
): asserts t is null {
	assert(t, isNull, errorCallOrMessage);
}

export function assertNonNull<T>(
	t: T | null,
	errorCallOrMessage: AssertError = 'null value',
): asserts t is T {
	assertNot(t, isNull, errorCallOrMessage);
}

export function assertUndefined<T>(
	t: T | undefined,
	errorCallOrMessage: AssertError = 'defined value',
): asserts t is undefined {
	assert(t, isUndefined, errorCallOrMessage);
}

export function assertDefined<T>(
	t: T | undefined,
	errorCallOrMessage: AssertError = 'undefined value',
): asserts t is T {
	assertNot(t, isUndefined, errorCallOrMessage);
}

export function assertNullish<T>(
	t: Nullable<T>,
	errorCallOrMessage: AssertError = 'non nullish value',
): asserts t is null | undefined {
	assert(t, isNullish, errorCallOrMessage);
}

export function assertNonNullish<T>(
	t: Nullable<T>,
	errorCallOrMessage: AssertError = 'null or undefined value',
): asserts t is T {
	assertNot(t, isNullish, errorCallOrMessage);
}

export function assertArray(
	a: unknown,
	errorCallOrMessage: AssertError = 'not an array',
): asserts a is any[] {
	assert(a, isArray, errorCallOrMessage);
}

export function assertHasSize(
	x: unknown,
	errorCallOrMessage: AssertError = 'not sizeable',
): asserts x is Sizeable {
	assert(x, hasSize, errorCallOrMessage);
}

export function assertHasLength(
	x: unknown,
	errorCallOrMessage: AssertError = 'not lenghtable',
): asserts x is Lenghtable {
	assert(x, hasLength, errorCallOrMessage);
}

export function assertClass(
	object: any,
	errorCallOrMessage: AssertError = 'not a class',
): asserts object is Class<any> {
	assert(object, isClass, errorCallOrMessage);
}

export function assertInstanceOf<T>(
	object: any,
	type: Class<T>,
	errorCallOrMessage: AssertError = 'not a class',
): asserts object is T {
	assert(object, (t: unknown): t is T => t instanceof type, errorCallOrMessage);
}

export function assertHasProperty<T extends object, K extends keyof T>(
	t: T,
	prop: K,
): asserts t is T & {
	[k in K]: NonNullable<T[k]>;
};
export function assertHasProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): asserts t is {
	[k in P]: unknown;
};
export function assertHasProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): asserts t is {
	[k in P]: unknown;
} {
	assertNotProperty(t, prop, isNullish);
}

export function assertHasProperties<T extends object, K extends keyof T>(
	t: T,
	prop: K[],
): asserts t is T & {
	[k in K]: NonNullable<T[k]>;
};
export function assertHasProperties<K extends ObjectKeyType>(
	t: any,
	prop: K[],
): asserts t is {
	[k in K]: unknown;
};
export function assertHasProperties<K extends ObjectKeyType>(
	t: any,
	props: K[],
): asserts t is {
	[k in K]: unknown;
} {
	assertNotProperties(t, props, isNullish);
}

export function assertStringProperty<
	T extends object,
	K extends KeysOfType<T, Nullable<string>>,
>(
	t: T,
	prop: K,
): asserts t is T & {
	[k in K]: string;
};
export function assertStringProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): asserts t is {
	[k in P]: string;
};
export function assertStringProperty<P extends ObjectKeyType>(
	t: any,
	prop: P,
): asserts t is {
	[k in P]: string;
} {
	assertProperty(t, prop, isString);
}

export function assertStringProperties<
	T extends object,
	K extends KeysOfType<T, Nullable<string>>,
>(
	t: T,
	prop: K[],
): asserts t is T & {
	[k in K]: string;
};
export function assertStringProperties<K extends ObjectKeyType>(
	t: any,
	prop: K[],
): asserts t is {
	[k in K]: string;
};
export function assertStringProperties<K extends ObjectKeyType>(
	t: any,
	props: K[],
): asserts t is {
	[k in K]: string;
} {
	assertProperties(t, props, isString);
}
