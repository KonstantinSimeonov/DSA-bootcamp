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
    this._length -= 1;
    if (value === this.root.value) {
      this.root = this.root.next;
    }
    let current = this.root;
    let prev = null;
    while (current.next) {
      if (value === current.value) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
    if (value === current.value) {
      prev.next = current.next;
      this.tail = prev;
    }
  }

  removeAt(index) {
    this.length -= 1;
    if (index === 0) {
      this.root = this.root.next;
      return;
    }
    let prev = this.root;
    let current = this.root.next;
    let i = 1;
    while (current.next) {
      if (i === index) {
        prev.next = current.next;
        return;
      }
      i++;
      prev = current;
      current = current.next;
    }
    if (i === index) {
      this.tail = prev;
      prev.next = null;
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

  drop()
}

const list = new List();
// list.prepend(4);
// list.append(5);
// list.append(6);
// list.append(7);
// list.append(8);

// console.log(JSON.stringify(list.slice(0, 3).toArray()));

const banan = List.of(1, 2, 3, 4, 5);

console.log(JSON.stringify(banan));
