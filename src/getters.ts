import { assertAndGet, assertAndGetProperty } from './asserts';
import { isNonNullish, isString } from './guards';
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
