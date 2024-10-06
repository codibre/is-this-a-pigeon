import { assertAndGetProperty } from './asserts';
import { isNonNullish, isString } from './guards';
import { KeysOfType, Nullable, ObjectKeyType } from './types';

export function getDefinedProperty<T extends object, K extends keyof T>(
	obj: T,
	prop: K,
): NonNullable<T[K]> {
	return assertAndGetProperty(obj, prop, isNonNullish);
}

export function assertAndGetStringProperty<
	T extends object,
	K extends KeysOfType<T, Nullable<string>>,
>(obj: T, prop: K): string;
export function assertAndGetStringProperty<T extends object, K extends keyof T>(
	obj: T,
	prop: K,
): string;
export function assertAndGetStringProperty<K extends keyof ObjectKeyType>(
	obj: any,
	prop: K,
): string {
	return assertAndGetProperty(obj, prop, isString);
}
