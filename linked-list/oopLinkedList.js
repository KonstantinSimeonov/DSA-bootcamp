class Node_ {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class List {
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
    this.tail = this.tail.next;
  }

  prepend(value) {
    this.root = new Node_(value, this.root);
    this.tail = this.root;
    this._length += 1;
  }

  at(index) {
    let current = this.root;
    let i = 0;
    if (!current) {
      return undefined;
    }
    while (current.next) {
      if (index === i) {
        return current.value;
      }
      current = current.next;
      i++;
    }
    if (i === index) {
      return current.value;
    }
  }

  insert(index, value) {
    this._length += 1;
    if (!this.root) {
      this.root = new Node_(value);
      return;
    }
    if (index <= 0) {
      this.root = new Node_(value, this.root);
      return;
    }
    let current = this.root.next;
    let prev = this.root;
    let i = 0;
    while (current && i < index - 1) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = new Node_(value, current);
  }

  get length() {
    return this._length;
  }
}

const list = new List();
list.prepend(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
console.log(list.length);
console.log(JSON.stringify(list));
