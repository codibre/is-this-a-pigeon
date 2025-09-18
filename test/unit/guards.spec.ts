import {
	hasLength,
	hasMethod,
	hasMethods,
	hasProperties,
	hasProperty,
	hasSize,
	hasTruthyProperties,
	hasTruthyProperty,
	isAnyIterable,
	isArray,
	isAsyncIterable,
	isBoolean,
	isClass,
	isFalsy,
	isFunction,
	isIterable,
	isKeyOf,
	isNull,
	isNullish,
	isNumber,
	isOnlyIterable,
	isPromise,
	isPromiseLike,
	isString,
	isTruthy,
	isUndefined,
} from '../../src';

describe('guards.ts', () => {
	describe(isPromiseLike.name, () => {
		it('should return true when value is promise-like', () => {
			const result = isPromiseLike({ then: () => undefined });

			expect(result).toBe(true);
		});

		it('should return false when value is not promise-like', () => {
			const result = isPromiseLike({ catch: () => undefined });

			expect(result).toBe(false);
		});
	});

	describe(isPromise.name, () => {
		it('should return true when value is a promise', () => {
			const result = isPromise(Promise.resolve());

			expect(result).toBe(true);
		});

		it('should return false when value is not a promise', () => {
			const result = isPromise({ then: () => undefined });

			expect(result).toBe(false);
		});
	});

	describe(isIterable.name, () => {
		it('should return true when value is an async iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = isIterable(value);

			expect(result).toBe(true);
		});

		it('should return true when value is a string', () => {
			const value = 'something';

			const result = isIterable(value);

			expect(result).toBe(true);
		});

		it('should return true when value is an array', () => {
			const value = [1, 2, 3];

			const result = isIterable(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = isIterable(value);

			expect(result).toBe(false);
		});
	});

	describe(isOnlyIterable.name, () => {
		it('should return true when value is an iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = isOnlyIterable(value);

			expect(result).toBe(true);
		});

		it('should return false when value is a string', () => {
			const value = 'something';

			const result = isOnlyIterable(value);

			expect(result).toBe(false);
		});

		it('should return false when value is an array', () => {
			const value = [1, 2, 3];

			const result = isOnlyIterable(value);

			expect(result).toBe(false);
		});

		it('should return false when value is a Set', () => {
			const value = new Set([1, 2, 3]);

			const result = isOnlyIterable(value);

			expect(result).toBe(false);
		});

		it('should return false when value is a Map', () => {
			const value = new Map([
				[1, 1],
				[2, 2],
				[3, 3],
			]);

			const result = isOnlyIterable(value);

			expect(result).toBe(false);
		});

		it('should return false when value is not an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = isOnlyIterable(value);

			expect(result).toBe(false);
		});
	});

	describe(isAsyncIterable.name, () => {
		it('should return true when value is an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = isAsyncIterable(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not an async iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = isAsyncIterable(value);

			expect(result).toBe(false);
		});
	});

	describe(isAnyIterable.name, () => {
		it('should return true when value is an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = isAnyIterable(value);

			expect(result).toBe(true);
		});

		it('should return true when value is an iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = isAnyIterable(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not an iterable or an async iterable', () => {
			const value = 1;

			const result = isAnyIterable(value);

			expect(result).toBe(false);
		});
	});

	describe(isString.name, () => {
		it('should return true when value is a string', () => {
			const result = isString('123');

			expect(result).toBe(true);
		});

		it('should return false when value is not a string', () => {
			const result = isString(123);

			expect(result).toBe(false);
		});
	});

	describe(isNumber.name, () => {
		it('should return true when value is a number', () => {
			const result = isNumber(123);

			expect(result).toBe(true);
		});

		it('should return false when value is not a number', () => {
			const result = isNumber('123');

			expect(result).toBe(false);
		});
	});

	describe(isBoolean.name, () => {
		it('should return true when value is boolean', () => {
			const value = true;

			const result = isBoolean(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not boolean', () => {
			const value = 'true';

			const result = isBoolean(value);

			expect(result).toBe(false);
		});
	});

	describe(isFunction.name, () => {
		it('should return true when value is a function', () => {
			const value = () => undefined;

			const result = isFunction(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not a function', () => {
			const value = 'true';

			const result = isFunction(value);

			expect(result).toBe(false);
		});
	});

	describe(isNull.name, () => {
		it('should return true when value is null', () => {
			const value = null;

			const result = isNull(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not null', () => {
			const value = false;

			const result = isNull(value);

			expect(result).toBe(false);
		});
	});

	describe(isUndefined.name, () => {
		it('should return true when value is undefined', () => {
			const value = undefined;

			const result = isUndefined(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not undefined', () => {
			const value = null;

			const result = isUndefined(value);

			expect(result).toBe(false);
		});
	});

	describe(isNullish.name, () => {
		it('should return true when value is undefined', () => {
			const value = undefined;

			const result = isNullish(value);

			expect(result).toBe(true);
		});

		it('should return true when value is null', () => {
			const value = null;

			const result = isNullish(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not undefined or null', () => {
			const value = false;

			const result = isNullish(value);

			expect(result).toBe(false);
		});
	});

	describe(isFalsy.name, () => {
		it('should return true when value is 0', () => {
			const value = 0;

			const result = isFalsy(value);

			expect(result).toBe(true);
		});

		it('should return true when value is undefined', () => {
			const value = undefined;

			const result = isFalsy(value);

			expect(result).toBe(true);
		});

		it('should return true when value is false', () => {
			const value = 0;

			const result = isFalsy(value);

			expect(result).toBe(true);
		});

		it('should return true when value is an empty string', () => {
			const value = '';

			const result = isFalsy(value);

			expect(result).toBe(true);
		});

		it('should return true when value is null', () => {
			const value = null;

			const result = isFalsy(value);

			expect(result).toBe(true);
		});

		it('should return true when value is NaN', () => {
			const value = NaN;

			const result = isFalsy(value);

			expect(result).toBe(true);
		});

		it('should return false when value is not falsy', () => {
			const value = 1;

			const result = isFalsy(value);

			expect(result).toBe(false);
		});
	});

	describe(isTruthy.name, () => {
		it('should return false when value is 0', () => {
			const value = 0;

			const result = isTruthy(value);

			expect(result).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const value = undefined;

			const result = isTruthy(value);

			expect(result).toBe(false);
		});

		it('should return false when value is false', () => {
			const value = 0;

			const result = isTruthy(value);

			expect(result).toBe(false);
		});

		it('should return false when value is an empty string', () => {
			const value = '';

			const result = isTruthy(value);

			expect(result).toBe(false);
		});

		it('should return false when value is null', () => {
			const value = null;

			const result = isTruthy(value);

			expect(result).toBe(false);
		});

		it('should return false when value is NaN', () => {
			const value = NaN;

			const result = isTruthy(value);

			expect(result).toBe(false);
		});

		it('should return true when value is not falsy', () => {
			const value = 1;

			const result = isTruthy(value);

			expect(result).toBe(true);
		});
	});

	describe(hasProperty.name, () => {
		it('should return true when value have the specified property', () => {
			const value: any = { a: 0, b: false, c: null };

			const result = hasProperty(value, 'a');

			expect(result).toBe(true);
		});

		it('should return false when value does have the specified property', () => {
			const value: any = { a: 1, b: 2, c: undefined };

			const result = hasProperty(value, 'c');

			expect(result).toBe(false);
		});

		it('should return true when fieldAssert validates the property type', () => {
			const value: any = { a: 123, b: 'hello' };
			const result = hasProperty(value, 'a', isNumber);
			expect(result).toBe(true);
		});

		it('should return false when fieldAssert fails the property type', () => {
			const value: any = { a: 123, b: 'hello' };
			const result = hasProperty(value, 'b', isNumber);
			expect(result).toBe(false);
		});

		it('should return false when property does not exist, even if fieldAssert would pass', () => {
			const value: any = { a: 123 };
			const result = hasProperty(value, 'b', isNumber);
			expect(result).toBe(false);
		});
	});

	describe(hasTruthyProperty.name, () => {
		it('should return true when value have the specified truthy property', () => {
			const value: any = { a: 1, b: false, c: null };

			const result = hasTruthyProperty(value, 'a');

			expect(result).toBe(true);
		});

		it('should return false when value does have the specified truthy property', () => {
			const value: any = { a: 1, b: false, c: null };

			const result = hasTruthyProperty(value, 'c');

			expect(result).toBe(false);
		});
	});

	describe(hasProperties.name, () => {
		it('should return true when value have all specified properties', () => {
			const value: any = { a: 0, b: null, c: '' };

			const result = hasProperties(value, 'a', 'b', 'c');

			expect(result).toBe(true);
		});

		it('should return false when value does not have all specified properties', () => {
			const value: any = { a: 0, b: false, c: undefined };

			const result = hasProperties(value, 'a', 'b', 'c');

			expect(result).toBe(false);
		});
	});

	describe(hasTruthyProperties.name, () => {
		it('should return true when value have all specified truthy properties', () => {
			const value: any = { a: 1, b: 2, c: 3 };

			const result = hasTruthyProperties(value, 'a', 'b', 'c');

			expect(result).toBe(true);
		});

		it('should return false when value does not have all specified truthy properties', () => {
			const value: any = { a: 1, b: 2, c: null };

			const result = hasTruthyProperties(value, 'a', 'b', 'c');

			expect(result).toBe(false);
		});
	});

	describe(hasMethod.name, () => {
		it('should return true when value have the specified property', () => {
			const value: any = { a: () => undefined, b: 2, c: 3 };

			const result = hasMethod(value, 'a');

			expect(result).toBe(true);
		});

		it('should return false when value does have the specified property', () => {
			const value: any = { a: () => undefined, b: 2, c: 3 };

			const result = hasMethod(value, 'b');

			expect(result).toBe(false);
		});
	});

	describe(hasMethods.name, () => {
		it('should return true when value have all specified methods', () => {
			const value: any = {
				a: () => undefined,
				b: () => undefined,
				c: () => undefined,
			};

			const result = hasMethods(value, 'a', 'b', 'c');

			expect(result).toBe(true);
		});

		it('should return false when value does not have all specified methods', () => {
			const value: any = { a: () => undefined, b: () => undefined, c: 3 };

			const result = hasMethods(value, 'a', 'b', 'c');

			expect(result).toBe(false);
		});
	});

	describe(isArray.name, () => {
		it('should return true when value is an array', () => {
			const result = isArray([1, 2, 3]);

			expect(result).toBe(true);
		});

		it('should return false when value is not an array', () => {
			const result = isArray('123');

			expect(result).toBe(false);
		});
	});

	describe(hasSize.name, () => {
		it('should return true when informed value has size', () => {
			const result = hasSize({ size: 'a' });

			expect(result).toBe(true);
		});

		it('should return false when informed value does not has size', () => {
			const result = hasSize({ length: 'a' });

			expect(result).toBe(false);
		});
	});

	describe(hasLength.name, () => {
		it('should return true when informed value has size', () => {
			const result = hasLength({ length: 'a' });

			expect(result).toBe(true);
		});

		it('should return false when informed value does not has size', () => {
			const result = hasLength({ size: 'a' });

			expect(result).toBe(false);
		});
	});

	describe(isKeyOf.name, () => {
		it('should return true when value is a key of target', () => {
			let result = 0;
			const target = { a: 1 };
			const value: string = 'a';

			if (isKeyOf(value, target)) {
				result = target[value];
			}

			expect(result).toBe(1);
		});

		it('should return false when value is not a key of target', () => {
			let result = 0;
			const target = { a: 1 };
			const value: string = 'b';

			if (isKeyOf(value, target)) {
				result = target[value];
			}

			expect(result).toBe(0);
		});
	});

	describe(isClass.name, () => {
		it('should return true when value is a class', () => {
			class Test {}

			const result = isClass(Test);

			expect(result).toBe(true);
		});

		it('should return true when value is a class', () => {
			class Test {}

			const result = isClass(new Test());

			expect(result).toBe(false);
		});
	});

	it('should return false when value is a not key of target', () => {
		let result = 0;
		const target = { a: 1 };
		const value: string = 'b';

		if (isKeyOf(value, target)) {
			result = target[value];
		}

		expect(result).toBe(0);
	});
});
