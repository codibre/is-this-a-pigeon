import { LinkedList } from './linked-list';

/**
 * Efficient string builder using LinkedList for fast append and prepend operations.
 * Supports concatenation and joining with a separator.
 */
export class StringBuilder {
	private list = new LinkedList<string>();

	/**
	 * Appends a string to the end of the builder.
	 *
	 * @param str - String to append
	 */
	append(str: string): void {
		this.list.push(str);
	}

	/**
	 * Prepends a string to the beginning of the builder.
	 *
	 * @param str - String to prepend
	 */
	prepend(str: string): void {
		this.list.unshift(str);
	}

	/**
	 * Concatenates all strings in the builder and returns the result.
	 *
	 * @returns The concatenated string
	 */
	toString(): string {
		let result = '';
		for (const part of this.list) {
			result += part;
		}
		return result;
	}

	/**
	 * Joins all strings in the builder using the given separator.
	 *
	 * @param separator - Separator string
	 * @returns The joined string
	 */
	join(separator: string): string {
		let result = '';
		let first = true;
		for (const part of this.list) {
			if (!first) result += separator;
			result += part;
			first = false;
		}
		return result;
	}
}
