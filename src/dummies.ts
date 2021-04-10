import { hasLength } from './guards';
import { Lenghtable, Sizeable } from './types';

export function identity<T>(x: T) {
	return x;
}

export function constant<T>(x: T) {
	return () => x;
}

export function index(idx: number) {
	return <T>(x: ArrayLike<T>) => x[idx];
}

export function size(x: Sizeable) {
	return x.size;
}

export function arrayLength(x: Lenghtable) {
	return x.length;
}

export function length(x: Lenghtable | Sizeable) {
	return hasLength(x) ? arrayLength(x) : size(x);
}

export function hasMoreThan(threshold: number) {
	return (x: Lenghtable | Sizeable) => length(x) > threshold;
}

export function hasMoreOrExactly(threshold: number) {
	return (x: Lenghtable | Sizeable) => length(x) >= threshold;
}

export function hasLessThan(threshold: number) {
	return (x: Lenghtable | Sizeable) => length(x) < threshold;
}

export function hasLessOrExactly(threshold: number) {
	return (x: Lenghtable | Sizeable) => length(x) <= threshold;
}

export function hasExactly(threshold: number) {
	return (x: Lenghtable | Sizeable) => length(x) === threshold;
}

export function greaterThan<T>(threshold: T) {
	return (x: T) => x > threshold;
}

export function greaterOrEqual<T>(threshold: T) {
	return (x: T) => x >= threshold;
}

export function lesserThan<T>(threshold: T) {
	return (x: T) => x < threshold;
}

export function lesserOrEqual<T>(threshold: T) {
	return (x: T) => x <= threshold;
}

export function equal<T>(value: T) {
	return (x: unknown) => x === value;
}

export function propValue<K extends keyof T, T extends object = any>(k: K) {
	return (t: T) => t[k];
}

export function compareProp<K extends keyof T, T extends object = any>(
	k: K,
	comparer: (t: T[K]) => boolean,
) {
	return (t: T) => comparer(t[k]);
}
