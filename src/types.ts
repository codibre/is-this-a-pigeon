export type Args = any[];
export type Class<T = any> = new (...args: Args) => T;
export type AbstractClass<T = any> = abstract new (...args: Args) => T;
export type Func<A extends Args = Args, R = any> = (...args: A) => R;
export type ValueType = string | boolean | number;
export type Primitive = ValueType | null | undefined;
export type Sizeable = { size: number };
export type Lenghtable = { length: number };
