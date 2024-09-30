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
} from '../../src';

describe('guards.ts', () => {
	describe(assertPromiseLike.name, () => {
		it('should return true when value is promasserte-like', () => {
			const result = assertPromiseLike({ then: () => undefined });

			expect(result).toBeUndefined();
		});

		it('should return false when value is not promasserte-like', () => {
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
		it('should return true when value is a promasserte', () => {
			const result = assertPromise(Promise.resolve());

			expect(result).toBeUndefined();
		});

		it('should return false when value is not a promasserte', () => {
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
		it('should return true when value is an async iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = assertIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return true when value is a string', () => {
			const value = 'something';

			const result = assertIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return true when value is an array', () => {
			const value = [1, 2, 3];

			const result = assertIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not an async iterable', () => {
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
		it('should return true when value is an iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = assertOnlyIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is a string', () => {
			const value = 'something';

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should return false when value is an array', () => {
			const value = [1, 2, 3];

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should return false when value is a Set', () => {
			const value = new Set([1, 2, 3]);

			let thrownError: any;

			try {
				assertOnlyIterable(value);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should return false when value is a Map', () => {
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

		it('should return false when value is not an async iterable', () => {
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
		it('should return true when value is an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = assertAsyncIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not an async iterable', () => {
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
		it('should return true when value is an async iterable', () => {
			const value = (async function* () {
				yield 1;
			})();

			const result = assertAnyIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return true when value is an iterable', () => {
			const value = (function* () {
				yield 1;
			})();

			const result = assertAnyIterable(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not an iterable or an async iterable', () => {
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
		it('should return true when value is a string', () => {
			const result = assertString('123');

			expect(result).toBeUndefined();
		});

		it('should return false when value is not a string', () => {
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
		it('should return true when value is a number', () => {
			const result = assertNumber(123);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not a number', () => {
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
		it('should return true when value is boolean', () => {
			const value = true;

			const result = assertBoolean(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not boolean', () => {
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
		it('should return true when value is a function', () => {
			const value = () => undefined;

			const result = assertFunction(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not a function', () => {
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
		it('should return true when value is null', () => {
			const value = null;

			const result = assertNull(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not null', () => {
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
		it('should return true when value is undefined', () => {
			const value = undefined;

			const result = assertUndefined(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not undefined', () => {
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
		it('should return true when value is undefined', () => {
			const value = undefined;

			const result = assertNullish(value);

			expect(result).toBeUndefined();
		});

		it('should return true when value is null', () => {
			const value = null;

			const result = assertNullish(value);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not undefined or null', () => {
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
		it('should return true when value is an array', () => {
			const result = assertArray([1, 2, 3]);

			expect(result).toBeUndefined();
		});

		it('should return false when value is not an array', () => {
			let thrownError: any;

			try {
				assertArray('123');
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertHasSize.name, () => {
		it('should return true when informed value has size', () => {
			const result = assertHasSize({ size: 'a' });

			expect(result).toBeUndefined();
		});

		it('should return false when informed value does not has size', () => {
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
		it('should return true when informed value has size', () => {
			const result = assertHasLength({ length: 'a' });

			expect(result).toBeUndefined();
		});

		it('should return false when informed value does not has size', () => {
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
		it('should return true when value is a class', () => {
			class Test {}

			const result = assertClass(Test);

			expect(result).toBeUndefined();
		});

		it('should return true when value is a class', () => {
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
});
