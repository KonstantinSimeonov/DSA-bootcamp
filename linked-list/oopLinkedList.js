const { reporters } = require("mocha");

class Node_ {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class List {
  constructor() {
    this.root = null;
  }

  append(value) {
    this.insert(Infinity, value);
  }

  prepend(value) {
    this.insert(0, value);
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
}

const list = new List();

list.append(5);
list.append(6);
list.append(7);
list.append(8);

console.log(JSON.stringify(list));
