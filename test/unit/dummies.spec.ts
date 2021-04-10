import {
	arrayLength,
	constant,
	hasMoreOrExactly,
	hasMoreThan,
	hasExactly,
	identity,
	index,
	length,
	hasLessOrExactly,
	hasLessThan,
	size,
	greaterThan,
	greaterOrEqual,
	lesserThan,
	lesserOrEqual,
	equal,
	compareProp,
	propValue,
} from '../../src';

describe('dummies.ts', () => {
	describe(identity.name, () => {
		it('should return the informed value', () => {
			const value = {};

			const result = identity(value);

			expect(result).toBe(value);
		});
	});

	describe(constant.name, () => {
		it('should return a functions that returns the informed value', () => {
			const value = {};

			const callback = constant(value);
			const result = callback();

			expect(result).toBe(value);
		});
	});

	describe(index.name, () => {
		it('should return a functions that returns the informed index value', () => {
			const value = {};
			const array = [5, value, 6];

			const callback = index(1);
			const result = callback(array);

			expect(result).toBe(value);
		});
	});

	describe(size.name, () => {
		it('should return the size of the informed set', () => {
			const result = size(new Set([1, 2, 3]));

			expect(result).toBe(3);
		});

		it('should return the size of the informed map', () => {
			const result = size(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result).toBe(3);
		});
	});

	describe(arrayLength.name, () => {
		it('should return the size of the array', () => {
			const result = arrayLength([1, 2, 3]);

			expect(result).toBe(3);
		});
	});

	describe(length.name, () => {
		it('should return the size of the informed set', () => {
			const result = length(new Set([1, 2, 3]));

			expect(result).toBe(3);
		});

		it('should return the size of the informed map', () => {
			const result = length(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result).toBe(3);
		});

		it('should return the size of the array', () => {
			const result = length([1, 2, 3]);

			expect(result).toBe(3);
		});
	});

	describe(hasMoreThan.name, () => {
		it('should return a function that returns true when the informed array has more elements than the threshold', () => {
			const callback = hasMoreThan(2);
			const result = callback([1, 2, 3]);

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed set has more elements than the threshold', () => {
			const callback = hasMoreThan(2);
			const result = callback(new Set([1, 2, 3]));

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed map has more elements than the threshold', () => {
			const callback = hasMoreThan(2);
			const result = callback(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed string has more chars than the threshold', () => {
			const callback = hasMoreThan(2);
			const result = callback('123');

			expect(result).toBe(true);
		});

		it('should return a function that returns false when the informed array has less or exactly elements than the threshold', () => {
			const callback = hasMoreThan(2);
			const result1 = callback([1]);
			const result2 = callback([1, 2]);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed set has less or exactly elements than the threshold', () => {
			const callback = hasMoreThan(2);
			const result1 = callback(new Set([1]));
			const result2 = callback(new Set([1, 2]));

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed map has less or exactly elements than the threshold', () => {
			const callback = hasMoreThan(2);
			const result1 = callback(new Map([[1, 1]]));
			const result2 = callback(
				new Map([
					[1, 1],
					[2, 2],
				]),
			);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed string has less or exactly chars than the threshold', () => {
			const callback = hasMoreThan(2);
			const result1 = callback('1');
			const result2 = callback('12');

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});
	});

	describe(hasMoreOrExactly.name, () => {
		it('should return a function that returns true when the informed array has more or exactly elements than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result1 = callback([1, 2]);
			const result2 = callback([1, 2, 3]);

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed set has more or exactly elements than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result1 = callback(new Set([1, 2]));
			const result2 = callback(new Set([1, 2, 3]));

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed map has more or exactly elements than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result1 = callback(
				new Map([
					[1, 1],
					[2, 2],
				]),
			);
			const result2 = callback(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed string has more or exactly chars than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result1 = callback('12');
			const result2 = callback('123');

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns false when the informed array has less elements than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result = callback([1]);

			expect(result).toBe(false);
		});

		it('should return a function that returns false when the informed set has less elements than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result = callback(new Set([1]));

			expect(result).toBe(false);
		});

		it('should return a function that returns false when the informed map has less elements than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result = callback(new Map([[1, 1]]));

			expect(result).toBe(false);
		});

		it('should return a function that returns false when the informed string has less chars than the threshold', () => {
			const callback = hasMoreOrExactly(2);
			const result = callback('3');

			expect(result).toBe(false);
		});
	});

	describe(hasLessThan.name, () => {
		it('should return a function that returns true when the informed array has more elements than the threshold', () => {
			const callback = hasLessThan(2);
			const result = callback([1]);

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed set has more elements than the threshold', () => {
			const callback = hasLessThan(2);
			const result = callback(new Set([1]));

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed map has more elements than the threshold', () => {
			const callback = hasLessThan(2);
			const result = callback(new Map([[1, 1]]));

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed string has more chars than the threshold', () => {
			const callback = hasLessThan(2);
			const result = callback('3');

			expect(result).toBe(true);
		});

		it('should return a function that returns false when the informed array has more or exactly elements than the threshold', () => {
			const callback = hasLessThan(2);
			const result1 = callback([1, 2]);
			const result2 = callback([1, 2, 3]);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed set has more or exactly elements than the threshold', () => {
			const callback = hasLessThan(2);
			const result1 = callback(new Set([1, 2]));
			const result2 = callback(new Set([1, 2, 3]));

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed map has more or exactly elements than the threshold', () => {
			const callback = hasLessThan(2);
			const result1 = callback(
				new Map([
					[1, 1],
					[2, 2],
				]),
			);
			const result2 = callback(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed string has more or exactly chars than the threshold', () => {
			const callback = hasLessThan(2);
			const result1 = callback('12');
			const result2 = callback('123');

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});
	});

	describe(hasLessOrExactly.name, () => {
		it('should return a function that returns true when the informed array has more elements than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result1 = callback([1]);
			const result2 = callback([1, 2]);

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed set has more elements than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result1 = callback(new Set([1]));
			const result2 = callback(new Set([1, 2]));

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed map has more elements than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result1 = callback(new Map([[1, 1]]));
			const result2 = callback(
				new Map([
					[1, 1],
					[2, 2],
				]),
			);

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed string has more chars than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result1 = callback('1');
			const result2 = callback('12');

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should return a function that returns true when the informed array has more elements than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result = callback([1, 2, 3]);

			expect(result).toBe(false);
		});

		it('should return a function that returns false when the informed set has more elements than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result = callback(new Set([1, 2, 3]));

			expect(result).toBe(false);
		});

		it('should return a function that returns false when the informed map has more elements than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result = callback(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result).toBe(false);
		});

		it('should return a function that returns false when the informed string has more chars than the threshold', () => {
			const callback = hasLessOrExactly(2);
			const result = callback('123');

			expect(result).toBe(false);
		});
	});

	describe(hasExactly.name, () => {
		it('should return a function that returns true when the informed array has exactly the elements than the threshold', () => {
			const callback = hasExactly(2);
			const result = callback([1, 2]);

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed set exactly the elements than the threshold', () => {
			const callback = hasExactly(2);
			const result = callback(new Set([1, 2]));

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed map exactly the elements than the threshold', () => {
			const callback = hasExactly(2);
			const result = callback(
				new Map([
					[1, 1],
					[2, 2],
				]),
			);

			expect(result).toBe(true);
		});

		it('should return a function that returns true when the informed string exactly the chars than the threshold', () => {
			const callback = hasExactly(2);
			const result = callback('12');

			expect(result).toBe(true);
		});

		it('should return a function that returns false when the informed array has not the exactly elements than the threshold', () => {
			const callback = hasExactly(2);
			const result1 = callback([1]);
			const result2 = callback([1, 2, 3]);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed set has not exactly the elements than the threshold', () => {
			const callback = hasExactly(2);
			const result1 = callback(new Set([1]));
			const result2 = callback(new Set([1, 2, 3]));

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed map has not the exactly elements than the threshold', () => {
			const callback = hasExactly(2);
			const result1 = callback(new Map([[1, 1]]));
			const result2 = callback(
				new Map([
					[1, 1],
					[2, 2],
					[3, 3],
				]),
			);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});

		it('should return a function that returns false when the informed string has not exactly chars than the threshold', () => {
			const callback = hasExactly(2);
			const result1 = callback('1');
			const result2 = callback('123');

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});
	});

	describe(greaterThan.name, () => {
		it('should a function that returns true when value is greater than threshold', () => {
			const callback = greaterThan(2);
			const result = callback(3);

			expect(result).toBe(true);
		});

		it('should a function that returns false when value is lesser or equal the threshold', () => {
			const callback = greaterThan(2);
			const result1 = callback(1);
			const result2 = callback(2);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});
	});

	describe(greaterOrEqual.name, () => {
		it('should a function that returns true when value is greater or equal the threshold', () => {
			const callback = greaterOrEqual(2);
			const result1 = callback(3);
			const result2 = callback(2);

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should a function that returns false when value is lesser the threshold', () => {
			const callback = greaterOrEqual(2);
			const result = callback(1);

			expect(result).toBe(false);
		});
	});

	describe(lesserThan.name, () => {
		it('should a function that returns true when value is lesser than threshold', () => {
			const callback = lesserThan(2);
			const result = callback(1);

			expect(result).toBe(true);
		});

		it('should a function that returns false when value is greater or equal the threshold', () => {
			const callback = lesserThan(2);
			const result1 = callback(3);
			const result2 = callback(2);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});
	});

	describe(lesserOrEqual.name, () => {
		it('should a function that returns true when value is lesser or equal the threshold', () => {
			const callback = lesserOrEqual(2);
			const result1 = callback(1);
			const result2 = callback(2);

			expect(result1).toBe(true);
			expect(result2).toBe(true);
		});

		it('should a function that returns false when value is greater the threshold', () => {
			const callback = lesserOrEqual(2);
			const result = callback(3);

			expect(result).toBe(false);
		});
	});

	describe(lesserThan.name, () => {
		it('should a function that returns true when value is lesser than threshold', () => {
			const callback = lesserThan(2);
			const result = callback(1);

			expect(result).toBe(true);
		});

		it('should a function that returns false when value is greater or equal the threshold', () => {
			const callback = lesserThan(2);
			const result1 = callback(3);
			const result2 = callback(2);

			expect(result1).toBe(false);
			expect(result2).toBe(false);
		});
	});

	describe(equal.name, () => {
		it('should a function that returns true when value is equals the threshold', () => {
			const value = {};

			const callback = equal(value);
			const result = callback(value);

			expect(result).toBe(true);
		});

		it('should a function that returns false when value not equal the threshold', () => {
			const callback = equal({});
			const result = callback({});

			expect(result).toBe(false);
		});
	});

	describe(compareProp.name, () => {
		it('should return a function that returns true when property passes the comparison', () => {
			const value = {
				a: 1,
				b: 2,
				c: 3,
			};

			const callback = compareProp('a', equal(1));
			const result = callback(value);

			expect(result).toBe(true);
		});

		it('should return a function that returns false when property does not passes the comparison', () => {
			const value = {
				a: 1,
				b: 2,
				c: 3,
			};

			const callback = compareProp('b', equal(1));
			const result = callback(value);

			expect(result).toBe(false);
		});

		it('should return a function that serves as filter for all the elements of an array that passes the comparison', () => {
			const value = [
				{
					a: 1,
					b: 2,
					c: 3,
				},
				{
					a: 4,
					b: 5,
					c: 6,
				},
				{
					a: 1,
					b: 7,
					c: 8,
				},
				{
					a: 9,
					b: 10,
					c: 11,
				},
			];

			const result = value.filter(compareProp('a', equal(1)));

			expect(result).toEqual([
				{
					a: 1,
					b: 2,
					c: 3,
				},
				{
					a: 1,
					b: 7,
					c: 8,
				},
			]);
		});
	});

	describe(propValue.name, () => {
		it('should return a function that returns the property value', () => {
			const value = {
				a: 1,
				b: 2,
				c: 3,
			};

			const callback = propValue('a');
			const result = callback(value);

			expect(result).toBe(1);
		});

		it('should return a function that serves as mapper for all the elements of an array', () => {
			const value = [
				{
					a: 1,
					b: 2,
					c: 3,
				},
				{
					a: 4,
					b: 5,
					c: 6,
				},
				{
					a: 1,
					b: 7,
					c: 8,
				},
				{
					a: 9,
					b: 10,
					c: 11,
				},
			];

			const result = value.map(propValue('a'));

			expect(result).toEqual([1, 4, 1, 9]);
		});
	});
});
