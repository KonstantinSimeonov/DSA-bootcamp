class Node_ {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class List {
  static from(xs) {
    const list = new List();
    xs.forEach((x) => list.append(x));
    return list;
  }

  static of(...xs) {
    return List.from(xs);
  }

  constructor() {
    this.root = null;
    this.tail = null;
    this._length = 0;
  }

  append(value) {
    this._length += 1;

    if (!this.root) {
      this.root = new Node_(value);
      this.tail = this.root;
      return;
    }
    this.tail.next = new Node_(value);
    this.tail.next = this.root.next;
    this.tail = this.tail.next;
  }

  hasCycle() {
    if (!this.root) return false;
    let slow = this.root;
    let fast = this.root;
    while (slow.next && fast.next && fast.next.next) {
      if (slow === fast) return true;
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }
}

const list = List.of(1, 2, 3, 4, 5);

console.log(list.hasCycle());
