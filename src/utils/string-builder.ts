import { LinkedList } from './linked-list';

export class StringBuilder {
	private list = new LinkedList<string>();

	append(str: string): void {
		this.list.push(str);
	}

	prepend(str: string): void {
		this.list.unshift(str);
	}

	toString(): string {
		let result = '';
		for (const part of this.list) {
			result += part;
		}
		return result;
	}

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
