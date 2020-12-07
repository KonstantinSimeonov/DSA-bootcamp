const {
  empty,
  append,
  get,
  toArray,
  prepend,
  length,
  removeAt,
  remove,
} = require("./linked-list");

let list = empty();

append(5, list);
append(3, list);
append(2, list);
prepend(6, list);

console.log(JSON.stringify(list));
remove(6, list);
console.log(JSON.stringify(list));
