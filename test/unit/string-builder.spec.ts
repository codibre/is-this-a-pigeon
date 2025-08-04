import { StringBuilder } from '../../src/utils/string-builder';

describe('StringBuilder', () => {
	// Arrange
	let sb: StringBuilder;
	beforeEach(() => {
		sb = new StringBuilder();
	});

	it('should append strings', () => {
		// Act
		sb.append('a');
		sb.append('b');
		sb.append('c');
		// Assert
		expect(sb.toString()).toBe('abc');
	});

	it('should prepend strings', () => {
		// Act
		sb.prepend('a');
		sb.prepend('b');
		sb.prepend('c');
		// Assert
		expect(sb.toString()).toBe('cba');
	});

	it('should join strings with separator', () => {
		// Arrange
		sb.append('a');
		sb.append('b');
		sb.append('c');
		// Act
		const result = sb.join('-');
		// Assert
		expect(result).toBe('a-b-c');
	});

	it('should handle empty StringBuilder', () => {
		// Act // Assert
		expect(sb.toString()).toBe('');
		expect(sb.join(',')).toBe('');
	});

	it('should combine append and prepend', () => {
		// Act
		sb.append('a');
		sb.prepend('b');
		sb.append('c');
		// Assert
		expect(sb.toString()).toBe('bac');
		expect(sb.join(',')).toBe('b,a,c');
	});
});
