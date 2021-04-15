export type Args = any[];
export type Class<T = any> = new (...args: Args) => T;
export type AbstractClass<T = any> = abstract new (...args: Args) => T;
export type Func<A extends Args = Args, R = any> = (...args: A) => R;
export type ValueType = string | boolean | number;
export type Primitive = ValueType | null | undefined;
export type Sizeable = { size: number };
export type Lenghtable = { length: number };
export type IterableItem<T> = T extends Iterable<infer R> ? R : never;
export type AnyIterable<T> = Iterable<T> | AsyncIterable<T>;
export type AsyncIterableItem<T> = T extends AsyncIterable<infer R> ? R : never;
export type AnyIterableItem<T> = T extends AnyIterable<infer R> ? R : never;
export type AbstractConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
export type KeysOfType<T, V> = {
	[K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
export type ClassMethod<
T extends Object,
K extends KeysOfType<T, Func>
> = T[K];
