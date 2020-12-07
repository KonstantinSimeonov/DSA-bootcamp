/**
 * returns an empty linked list
 */
const empty = () => ({ root: null });

/**
 * append value to the end of the list
 */
const append = (value, list) => {
  if (!list.root) {
    list.root = {
      value,
      tail: null,
    };
    return;
  }
  let current = list.root;
  while (current.tail) {
    current = current.tail;
  }
  current.tail = {
    value,
    tail: null,
  };
};

/**
 * returns the value at the index in list
 * or undefined if the list is not long enough
 */
const get = (index, list) => {
  if (!list.root) {
    return;
  }

  let current = list.root;
  let i = 0;
  while (current.tail && i < index) {
    current = current.tail;
    i++;
  }
  if (i < index) {
    return;
  }
  return current.value;
};

/**
 * returns an array that contains all the elements
 * of the linked list in the same order
 */
const toArray = (list) => {
  const arr = [];
  if (!list.root) {
    return [];
  }
  let current = list.root;
  while (current.tail) {
    arr.push(current.value);
    current = current.tail;
  }
  arr.push(current.value);
  return arr;
};

/**
 * inserts an element at the beginning of the list
 */
const prepend = (value, list) => {
  const oldList = list.root;
  list.root = {
    value,
    tail: oldList,
  };
};

/**
 * returns the length of the list
 */
const length = (list) => {
  let length = 1;
  if (!list.root) {
    return 0;
  }
  let current = list.root;
  while (current.tail) {
    current = current.tail;
    length++;
  }
  return length;
};

/**
 * removes the value at the given index from the list
 */
const removeAt = (index, list) => {
  if (index === 0) {
    list.root = list.root.tail;
  }
  let i = 0;
  let current = list.root;
  let previous;
  while (current.tail) {
    previous = current;
    current = current.tail;
    if (i === index - 1) {
      previous.tail = current.tail;
    }
    i++;
  }
};

/**
 * removes the given value from the list
 */
const remove = (value, list) => {
  let current = list.root;
  if (current.value === value) {
    list.root = list.root.tail;
  }
  let previous;
  while (current.tail) {
    previous = current;
    current = current.tail;
    if (current.value === value) {
      previous.tail = current.tail;
    }
  }
};

/**
 * reverses the list
 */
const reverse = (list) => {};

/**
 * inserts a value at the given index in the list
 */
const insert = (value, at, list) => {};

//module.exports.append = append;
// Allow other scripts to load this object
// by using require
module.exports = {
  empty,
  append,
  remove,
  removeAt,
  get,
  toArray,
  reverse,
  prepend,
  length,
  insert,
};
