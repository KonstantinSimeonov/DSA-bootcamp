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
      return this;
    }
    if (index <= 0) {
      this.root = new Node_(value, this.root);
      return this;
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
    return this;
  }

  get length() {
    return this._length;
  }

  toArray() {
    const arr = [];
    let current = this.root;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let prev = null;
    let curr = this.root;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    [this.root, this.tail] = [this.tail, this.root];
  }

  remove(value) {
    if (!this.root) {
      return;
    }
    if (value === this.root.value) {
      this.root = this.root.next;
      this.length--;
    }
    let current = this.root;
    let prev = null;
    while (current.next) {
      if (value === current.value) {
        prev.next = current.next;
        this.length--;
        return;
      }
      prev = current;
      current = current.next;
    }
    if (value === current.value) {
      prev.next = current.next;
      this.tail = prev;
      this.length--;
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.root = this.root.next;
      this.length--;
      return;
    }
    let prev = this.root;
    let current = this.root.next;
    let i = 1;
    while (current.next) {
      if (i === index) {
        prev.next = current.next;
        this.length--;
        return;
      }
      i++;
      prev = current;
      current = current.next;
    }
    if (i === index) {
      this.tail = prev;
      prev.next = null;
      this.length--;
    }
  }

  slice(from = 0, to = this.length) {
    let newList = new List();
    let current = this.root;
    let i = 0;
    while (current && i >= from && i < to) {
      newList.append(current.value);
      current = current.next;
      i++;
    }
    return newList;
  }

  drop(fun) {
    if (!this.root) {
      return;
    }
    let prev = this.root;
    let current = this.root.next;
    while (current.next) {
      if (fun(current.value)) {
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
      this._length--;
    }
    if (fun(this.root)) {
      this.root = this.root.next;
      this._length--;
    }
    if (fun(current.value)) {
      prev.next = current.next;
      this.tail = prev;
      this._length--;
    }
  }

  reduceLeft(fun, initialValue) {
    let result = initialValue;
    let current = this.root;
    if (arguments.length < 2 && this.root) {
      result = this.root.value;
      current = this.root.next;
    }
    while (current) {
      result = fun(result, current.value);
      current = current.next;
    }
    return result;
  }

  toString() {
    return `List {${list.reduceLeft((a, b) => `${a} -> ${b}`) || ``}}`;
  }
}

const list = List.of(2, 4, 6, 8, 10);

list.drop((x) => x % 2 === 0);

module.exports = List;
