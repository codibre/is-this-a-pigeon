import {
	assertHasLength,
	assertHasSize,
	assertAnyIterable,
	assertArray,
	assertAsyncIterable,
	assertBoolean,
	assertClass,
	assertFunction,
	assertIterable,
	assertNull,
	assertNullish,
	assertNumber,
	assertOnlyIterable,
	assertPromise,
	assertPromiseLike,
	assertString,
	assertUndefined,
	assertHasProperty,
	assertNonNull,
	assertHasProperties,
	assertStringProperties,
	assertStringProperty,
	assertDefined,
	assertNonNullish,
	assertInstanceOf,
} from '../../src';

describe('guards.ts', () => {
	describe(assertPromiseLike.name, () => {
		it('should not throw an error when value is promise-like', () => {
			const result = assertPromiseLike({ then: () => undefined });

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not promise-like', () => {
			let thrownError: any;

			try {
				assertPromiseLike({ catch: () => undefined });
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertPromise.name, () => {
		it('should not throw an error when value is a promasserte', () => {
			const result = assertPromise(Promise.resolve());

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not a promasserte', () => {
			let thrownError: any;

			try {
				assertPromise({ then: () => undefined });
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertIterable.name, () => {
		it('should not throw an error when value is an async iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = assertIterable(value);

			expect(result).toBeUndefined();
		});

		it('should not throw an error when value is a string', () => {
			const value = 'something';

			const result = assertIterable(value);

			expect(result).toBeUndefined();
		});

		it('should not throw an error when value is an array', () => {
			const value = [1, 2, 3];

			const result = assertIterable(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			let thrownError: any;

			try {
				assertIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertOnlyIterable.name, () => {
		it('should not throw an error when value is an iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = assertOnlyIterable(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is a string', () => {
			const value = 'something';

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should throw an error when value is an array', () => {
			const value = [1, 2, 3];

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should throw an error when value is a Set', () => {
			const value = new Set([1, 2, 3]);

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should throw an error when value is a Map', () => {
			const value = new Map([
				[1, 1],
				[2, 2],
				[3, 3],
			]);

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should throw an error when value is not an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertAsyncIterable.name, () => {
		it('should not throw an error when value is an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = assertAsyncIterable(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not an async iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			let thrownError: any;

			try {
				assertAsyncIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertAnyIterable.name, () => {
		it('should not throw an error when value is an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = assertAnyIterable(value);

			expect(result).toBeUndefined();
		});

		it('should not throw an error when value is an iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = assertAnyIterable(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not an iterable or an async iterable', () => {
			const value = 1;

			let thrownError: any;

			try {
				assertAnyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertString.name, () => {
		it('should not throw an error when value is a string', () => {
			const result = assertString('123');

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not a string', () => {
			let thrownError: any;

			try {
				assertString(123);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertNumber.name, () => {
		it('should not throw an error when value is a number', () => {
			const result = assertNumber(123);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not a number', () => {
			let thrownError: any;

			try {
				assertNumber('123');
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertBoolean.name, () => {
		it('should not throw an error when value is boolean', () => {
			const value = true;

			const result = assertBoolean(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not boolean', () => {
			const value = 'true';

			let thrownError: any;

			try {
				assertBoolean(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertFunction.name, () => {
		it('should not throw an error when value is a function', () => {
			const value = () => undefined;

			const result = assertFunction(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not a function', () => {
			const value = 'true';

			let thrownError: any;

			try {
				assertFunction(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertNull.name, () => {
		it('should not throw an error when value is null', () => {
			const value = null;

			const result = assertNull(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not null', () => {
			const value = false;

			let thrownError: any;

			try {
				assertNull(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertUndefined.name, () => {
		it('should not throw an error when value is undefined', () => {
			const value = undefined;

			const result = assertUndefined(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not undefined', () => {
			const value = null;

			let thrownError: any;

			try {
				assertUndefined(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertNullish.name, () => {
		it('should not throw an error when value is undefined', () => {
			const value = undefined;

			const result = assertNullish(value);

			expect(result).toBeUndefined();
		});

		it('should not throw an error when value is null', () => {
			const value = null;

			const result = assertNullish(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not undefined or null', () => {
			const value = false;

			let thrownError: any;

			try {
				assertNullish(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertArray.name, () => {
		it('should not throw an error when value is an array', () => {
			const result = assertArray([1, 2, 3]);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not an array', () => {
			let thrownError: any;

			try {
				assertArray('123');
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertHasProperty.name, () => {
		it('should not throw an error when informed value has informed property', () => {
			const result = assertHasProperty({ size: 'a' }, 'size');

			expect(result).toBeUndefined();
		});

		it('should throw an error when informed value does not has informed property', () => {
			let thrownError: any;

			try {
				assertHasProperty({ length: 'a' }, 'size');
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertHasProperties.name, () => {
		it('should not throw an error when informed value has all informed properties', () => {
			const result = assertHasProperties({ size: 'a', length: 123 }, [
				'size',
				'length',
			]);

			expect(result).toBeUndefined();
		});

		it('should throw an error when informed value does not has all informed properties', () => {
			let thrownError: any;

			try {
				assertHasProperties({ length: 'a' }, ['size', 'length']);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertStringProperty.name, () => {
		it('should not throw an error when informed value has informed property', () => {
			const result = assertStringProperty({ size: 'a' }, 'size');

			expect(result).toBeUndefined();
		});

		it('should throw an error when informed value does not has informed property', () => {
			let thrownError: any;

			try {
				assertStringProperty({ size: 123 }, 'size');
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertStringProperties.name, () => {
		it('should not throw an error when informed value has all informed properties as string', () => {
			const result = assertStringProperties({ size: 'a', length: 'b' }, [
				'size',
				'length',
			]);

			expect(result).toBeUndefined();
		});

		it('should throw an error when informed value does not has all informed properties as string', () => {
			let thrownError: any;

			try {
				assertStringProperties({ length: 'a', size: 123 }, ['size', 'length']);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertHasSize.name, () => {
		it('should not throw an error when informed value has size', () => {
			const result = assertHasSize({ size: 'a' });

			expect(result).toBeUndefined();
		});

		it('should throw an error when informed value does not has size', () => {
			let thrownError: any;

			try {
				assertHasSize({ length: 'a' });
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertHasLength.name, () => {
		it('should not throw an error when informed value has size', () => {
			const result = assertHasLength({ length: 'a' });

			expect(result).toBeUndefined();
		});

		it('should throw an error when informed value does not has size', () => {
			let thrownError: any;

			try {
				assertHasLength({ size: 'a' });
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertClass.name, () => {
		it('should not throw an error when value is a class', () => {
			class Test {}

			const result = assertClass(Test);

			expect(result).toBeUndefined();
		});

		it('should not throw an error when value is a class', () => {
			class Test {}

			let thrownError: any;

			try {
				assertClass(new Test());
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertNonNull.name, () => {
		it('should throw no error when value is non null', () => {
			const value = 123;

			const result = assertNonNull(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is null', () => {
			const value = null;

			let thrownError: any;

			try {
				assertNonNull(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertNonNull.name, () => {
		it('should throw no error when value is non null', () => {
			const value = 123;

			const result = assertNonNull(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is null', () => {
			const value = null;

			let thrownError: any;

			try {
				assertNonNull(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertDefined.name, () => {
		it('should throw no error when value is non null or undefined', () => {
			const value = 123;

			const result = assertDefined(value);

			expect(result).toBeUndefined();
		});

		it('should throw no error when value is null', () => {
			const value = null;

			const result = assertDefined(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is undefined', () => {
			const value = undefined;

			let thrownError: any;

			try {
				assertDefined(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertNonNullish.name, () => {
		it('should throw no error when value is non null or undefined', () => {
			const value = 123;

			const result = assertNonNullish(value);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is null', () => {
			const value = null;

			let thrownError: any;

			try {
				assertNonNullish(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should throw an error when value is undefined', () => {
			const value = undefined;

			let thrownError: any;

			try {
				assertNonNullish(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertInstanceOf.name, () => {
		class Test {}
		class Test2 {}
		it('should throw no error when value is an instance of the informed type', () => {
			const value = new Test();

			const result = assertInstanceOf(value, Test);

			expect(result).toBeUndefined();
		});

		it('should throw an error when value is not an instance of the informed type', () => {
			const value = new Test2();

			let thrownError: any;

			try {
				assertInstanceOf(value, Test);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});
});
