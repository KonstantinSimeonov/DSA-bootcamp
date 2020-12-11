class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.size++;
    this.storage[this.size] = value;
  }

  pop() {
    const removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}
const stack = new Stack();
stack.push(2);
stack.push(23);
stack.push(42);
stack.push(25);
stack.push(26);
stack.push(72);

console.log(stack);

console.log(stack.pop());

console.log(stack);

console.log(stack.peek());
