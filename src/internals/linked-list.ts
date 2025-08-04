/**
 * Doubly linked list implementation with efficient O(1) operations for adding/removing at head/tail.
 * Supports iteration and array-like length property.
 *
 * @template T Type of elements stored in the list
 */
export class LinkedList<T> implements Iterable<T> {
	private head: ListNode<T> | null = null;
	private tail: ListNode<T> | null = null;
	private _length: number = 0;

	/**
	 * Adds an element to the end (tail) of the list.
	 *
	 * @param value - Element to add
	 */
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

	/**
	 * Adds an element to the beginning (head) of the list.
	 *
	 * @param value - Element to add
	 */
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

	/**
	 * Removes and returns the last element (tail) of the list.
	 *
	 * @returns The removed element, or undefined if the list is empty
	 */
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

	/**
	 * Removes and returns the first element (head) of the list.
	 *
	 * @returns The removed element, or undefined if the list is empty
	 */
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

	/**
	 * Returns the number of elements in the list.
	 */
	get length(): number {
		return this._length;
	}

	/**
	 * Returns an iterator for the list, allowing iteration with for...of and spread syntax.
	 */
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
