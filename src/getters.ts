import { assertAndGet, assertAndGetProperty } from './asserts';
import { isNonNullish, isProperty, isString } from './guards';
import { AssertError, KeysOfType, Nullable, ObjectKeyType } from './types';

export function assertAndGetNonNullish<T>(value: Nullable<T>): NonNullable<T> {
	return assertAndGet(value, isNonNullish);
}
export function getDefinedProperty<T extends object, K extends keyof T>(
	obj: T,
	prop: K,
	errorCallOrMessage?: AssertError,
): NonNullable<T[K]> {
	return assertAndGetProperty(obj, prop, isNonNullish, errorCallOrMessage);
}

export function getPropertyOrDefault<
	O extends object,
	K extends keyof O,
	T,
	D extends T,
>(obj: O, prop: K, validation: (v: unknown) => v is T, def: D): T;
export function getPropertyOrDefault<
	K extends string | symbol | number,
	T,
	D extends T,
>(obj: unknown, prop: K, validation: (v: unknown) => v is T, def: D): T;
export function getPropertyOrDefault<
	K extends string | symbol | number,
	T,
	D extends T,
>(obj: unknown, prop: K, validation: (v: unknown) => v is T, def: D): T {
	return isProperty(obj, prop, validation) ? obj[prop] : def;
}

export function assertAndGetStringProperty<
	T extends object,
	K extends KeysOfType<T, Nullable<string>>,
>(obj: T, prop: K, errorCallOrMessage?: AssertError): string;
export function assertAndGetStringProperty<T extends object, K extends keyof T>(
	obj: T,
	prop: K,
	errorCallOrMessage?: AssertError,
): string;
export function assertAndGetStringProperty<K extends keyof ObjectKeyType>(
	obj: any,
	prop: K,
	errorCallOrMessage?: AssertError,
): string {
	return assertAndGetProperty(obj, prop, isString, errorCallOrMessage);
}

/**
 * Try to require a module and return it if successful, or undefined if it fails.
 * This is useful for optional dependencies or dynamic imports.
 * * @template T The type of the module to require. You may get it as import type * as msType from 'your-module';
 * Example:
 * ```ts
 * import type * as msType from 'your-module';
 * const ms = tryRequire<typeof msType>('your-module');
 * function doSomething() {
 *   assertDefined(ms, 'Module "your-module" is not available');
 *   ms.someFunction();
 * }
 * @param module The module to require.
 * @returns
 */
export function tryRequire<T>(module: string): T | undefined {
	try {
		return require(module);
	} catch {
		return undefined;
	}
}
