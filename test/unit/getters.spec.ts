import {
	assertAndGetNonNullish,
	assertAndGetStringProperty,
	getDefinedProperty,
} from '../../src';

describe('getters.ts', () => {
	describe(getDefinedProperty.name, () => {
		it('should return the property value when it exists', () => {
			const result = getDefinedProperty({ size: 'a' }, 'size');

			expect(result).toBe('a');
		});

		it('should throw an error when informed property does not exist', () => {
			let thrownError: any;

			try {
				getDefinedProperty({ length: 'a' }, 'size' as any);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertAndGetStringProperty.name, () => {
		it('should return the property value when not string', () => {
			const result = assertAndGetStringProperty({ size: 'abc' }, 'size');

			expect(result).toBe('abc');
		});

		it('should throw an error when informed property is not a string', () => {
			let thrownError: any;

			try {
				assertAndGetStringProperty({ size: 123 }, 'size' as any);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});

	describe(assertAndGetNonNullish.name, () => {
		it('should return value when non nullish', () => {
			const result = assertAndGetNonNullish('abc');

			expect(result).toBe('abc');
		});

		it('should throw an error when informed value is null', () => {
			let thrownError: any;

			try {
				assertAndGetNonNullish(null);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});

		it('should throw an error when informed value is undefined', () => {
			let thrownError: any;

			try {
				assertAndGetNonNullish(undefined);
			} catch (err) {
				thrownError = err;
			}

			expect(thrownError).toBeDefined();
		});
	});
});
