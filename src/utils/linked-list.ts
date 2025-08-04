export class LinkedList<T> implements Iterable<T> {
	private head: ListNode<T> | null = null;
	private tail: ListNode<T> | null = null;
	private _length: number = 0;

	push(value: T): void {
		const node = new ListNode(value);
		if (!this.tail) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this._length++;
	}

	unshift(value: T): void {
		const node = new ListNode(value);
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this._length++;
	}

	pop(): T | undefined {
		if (!this.tail) return undefined;
		const value = this.tail.value;
		if (this.tail.prev) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			this._length--;
			return value;
		}
		this.head = this.tail = null;
		this._length--;
		return value;
	}

	shift(): T | undefined {
		if (!this.head) return undefined;
		const value = this.head.value;
		if (this.head.next) {
			this.head = this.head.next;
			this.head.prev = null;
			this._length--;
			return value;
		}
		this.head = this.tail = null;
		this._length--;
		return value;
	}

	get length(): number {
		return this._length;
	}

	[Symbol.iterator](): Iterator<T> {
		let current = this.head;
		return {
			next(): IteratorResult<T> {
				if (!current) {
					return { value: undefined as any, done: true };
				}
				const value = current.value;
				current = current.next;
				return { value, done: false };
			},
		};
	}
}

class ListNode<T> {
	value: T;
	next: ListNode<T> | null = null;
	prev: ListNode<T> | null = null;
	constructor(value: T) {
		this.value = value;
	}
}
