import { StringBuilder } from 'src';

describe(StringBuilder.name, () => {
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
		sb.append('a').prepend('b').append('c');
		// Assert
		expect(sb.toString()).toBe('bac');
		expect(sb.join(',')).toBe('b,a,c');
		expect(sb.count).toBe(3);
	});

	it('should appendIf only when condition is true', () => {
		// Act
		sb.appendIf(false, 'a').appendIf(true, 'b').appendIf(true, 'c');
		// Assert
		expect(sb.toString()).toBe('bc');
		expect(sb.count).toBe(2);
	});

	it('should appendIf elseAdd when condition is false and elseAdd is provided', () => {
		// Act
		sb.appendIf(false, 'a', 'x')
			.appendIf(true, 'b', 'y')
			.appendIf(false, 'c', undefined);
		// Assert
		expect(sb.toString()).toBe('xb');
	});

	it('should prependIf only when condition is true', () => {
		// Act
		sb.prependIf(false, 'a').prependIf(true, 'b').prependIf(true, 'c');
		// Assert
		expect(sb.count).toBe(2);
		expect(sb.toString()).toBe('cb');
	});

	it('should prependIf elseAdd when condition is false and elseAdd is provided', () => {
		// Act
		sb.prependIf(false, 'a', 'x')
			.prependIf(true, 'b', 'y')
			.prependIf(false, 'c', undefined);
		// Assert
		expect(sb.toString()).toBe('bx');
	});

	it('should support chaining with appendIf and prependIf and elseAdd', () => {
		// Act
		sb.appendIf(true, 'a')
			.prependIf(true, 'b')
			.appendIf(false, 'c', 'x')
			.prependIf(false, 'd', 'y');
		// Assert
		expect(sb.toString()).toBe('yba' + 'x');
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
