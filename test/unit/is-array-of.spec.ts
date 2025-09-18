import { isArrayOf } from '../../src/guards';

describe('isArrayOf', () => {
	const isNumber = (x: unknown): x is number => typeof x === 'number';
	const isString = (x: unknown): x is string => typeof x === 'string';

	// Arrange // Act // Assert
	it('should return true for an array of numbers (default deepness)', () => {
		expect(isArrayOf(isNumber)([1, 2, 3])).toBe(true);
	});

	it('should return true for an array with a non-number (default deepness)', () => {
		expect(isArrayOf(isNumber)([1, '2', 3])).toBe(true);
	});

	it('should return true for an array of strings (deepness 2)', () => {
		expect(isArrayOf(isString, 2)(['a', 'b', 3])).toBe(true); // only first 2 checked
	});

	it('should return false if one of the first N items fails the guard', () => {
		expect(isArrayOf(isNumber, 2)([1, '2', 3])).toBe(false);
	});

	it('should return true for empty array', () => {
		expect(isArrayOf(isNumber)([])).toBe(true);
	});

	it('should return false for non-array input', () => {
		expect(isArrayOf(isNumber)('not-an-array')).toBe(false);
		expect(isArrayOf(isNumber)({})).toBe(false);
		expect(isArrayOf(isNumber)(null)).toBe(false);
		expect(isArrayOf(isNumber)(undefined)).toBe(false);
	});

	it('should only check up to the specified deepness', () => {
		const arr = [1, 2, '3', 4];
		expect(isArrayOf(isNumber, 2)(arr)).toBe(true); // only first 2 checked
		expect(isArrayOf(isNumber, 3)(arr)).toBe(false); // first 3 checked
	});
});
