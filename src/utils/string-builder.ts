import { LinkedList } from './linked-list';

/**
 * Efficient string builder using LinkedList for fast append and prepend operations.
 * Supports concatenation and joining with a separator.
 */
export class StringBuilder {
	private list = new LinkedList<unknown>();

	/**
	 * Appends a string to the end of the builder.
	 *
	 * @param str - String to append
	 * @returns The StringBuilder instance (for fluent interface)
	 */
	append(str: unknown): this {
		this.list.push(str);
		return this;
	}

	/**
	 * Appends a string to the end of the builder if the condition is true, otherwise appends elseAdd if provided.
	 *
	 * @param condition - If true, appends `str`; otherwise, appends `elseAdd` if provided
	 * @param str - String to append if condition is true
	 * @param elseAdd - String to append if condition is false (optional)
	 * @returns The StringBuilder instance (for fluent interface)
	 */
	appendIf(condition: boolean, str: unknown, elseAdd?: unknown): this {
		if (condition) this.append(str);
		else if (arguments.length > 2) this.append(elseAdd);
		return this;
	}

	/**
	 * Prepends a string to the beginning of the builder.
	 *
	 * @param str - String to prepend
	 * @returns The StringBuilder instance (for fluent interface)
	 */
	prepend(str: unknown): this {
		this.list.unshift(str);
		return this;
	}

	/**
	 * Prepends a string to the beginning of the builder if the condition is true, otherwise prepends elseAdd if provided.
	 *
	 * @param condition - If true, prepends `str`; otherwise, prepends `elseAdd` if provided
	 * @param str - String to prepend if condition is true
	 * @param elseAdd - String to prepend if condition is false (optional)
	 * @returns The StringBuilder instance (for fluent interface)
	 */
	prependIf(condition: boolean, str: unknown, elseAdd?: unknown): this {
		if (condition) this.prepend(str);
		else if (arguments.length > 2) this.prepend(elseAdd);
		return this;
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
