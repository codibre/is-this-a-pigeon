import { assertHasProperty } from './asserts';

export function getDefinedProperty<T extends object, K extends keyof T>(
	obj: T,
	prop: K,
): NonNullable<T[K]> {
	assertHasProperty(obj, prop);
	return obj[prop];
}
