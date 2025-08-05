import { isIterableIterator } from '../../src/guards';

describe('isIterableIterator', () => {
	it('should return true for a generator object', () => {
		// Arrange
		function* gen() {
			yield 1;
		}
		const iterator = gen();
		// Act
		const result = isIterableIterator(iterator);
		// Assert
		expect(result).toBe(true);
	});

	it('should return false for an array', () => {
		// Arrange
		const arr = [1, 2, 3];
		// Act
		const result = isIterableIterator(arr);
		// Assert
		expect(result).toBe(false);
	});

	it('should return false for a string', () => {
		// Arrange
		const str = 'abc';
		// Act
		const result = isIterableIterator(str);
		// Assert
		expect(result).toBe(false);
	});

	it('should return false for a Map', () => {
		// Arrange
		const map = new Map();
		// Act
		const result = isIterableIterator(map);
		// Assert
		expect(result).toBe(false);
	});

	it('should return false for a Set', () => {
		// Arrange
		const set = new Set();
		// Act
		const result = isIterableIterator(set);
		// Assert
		expect(result).toBe(false);
	});

	it('should return false for an object without next/iterator', () => {
		// Arrange
		const obj = { foo: 'bar' };
		// Act
		const result = isIterableIterator(obj);
		// Assert
		expect(result).toBe(false);
	});

	it('should return false for null and undefined', () => {
		// Arrange
		const values = [null, undefined];
		// Act & Assert
		values.forEach((v) => {
			expect(isIterableIterator(v)).toBe(false);
		});
	});
});
