import { LinkedList } from '../../src/internals/linked-list';

describe('LinkedList', () => {
	// Arrange
	let list: LinkedList<number>;
	beforeEach(() => {
		list = new LinkedList<number>();
	});

	it('should append elements with push', () => {
		// Act
		list.push(1);
		list.push(2);
		list.push(3);
		// Assert
		expect([...list]).toEqual([1, 2, 3]);
		expect(list.length).toBe(3);
	});

	it('should prepend elements with unshift', () => {
		// Act
		list.unshift(1);
		list.unshift(2);
		list.unshift(3);
		// Assert
		expect([...list]).toEqual([3, 2, 1]);
		expect(list.length).toBe(3);
	});

	it('should pop elements from the tail', () => {
		// Arrange
		list.push(1);
		list.push(2);
		list.push(3);
		// Act
		const popped = list.pop();
		// Assert
		expect(popped).toBe(3);
		expect([...list]).toEqual([1, 2]);
		expect(list.length).toBe(2);
	});

	it('should shift elements from the head', () => {
		// Arrange
		list.push(1);
		list.push(2);
		list.push(3);
		// Act
		const shifted = list.shift();
		// Assert
		expect(shifted).toBe(1);
		expect([...list]).toEqual([2, 3]);
		expect(list.length).toBe(2);
	});

	it('should handle empty list for pop and shift', () => {
		// Act
		const popped = list.pop();
		const shifted = list.shift();
		// Assert
		expect(popped).toBeUndefined();
		expect(shifted).toBeUndefined();
		expect(list.length).toBe(0);
	});

	it('should iterate all elements', () => {
		// Arrange
		list.push(1);
		list.push(2);
		list.push(3);
		// Act
		const result = [];
		for (const item of list) {
			result.push(item);
		}
		// Assert
		expect(result).toEqual([1, 2, 3]);
	});
});
