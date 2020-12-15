const { expect } = require("chai");
const List = require("./oop-linked-list");

describe("Linked list", () => {
  it("Can create a new list with given values with list of static method", () => {
    const list = new List();
    for (let i = 1; i < 6; i++) {
      list.append(i);
    }
    expect(List.of(1, 2, 3, 4, 5)).to.deep.equal(list);
  });

  it("Can List.append one item at the end", () => {
    const list = new List();
    list.append(2);
    expect(list.at(0)).to.equal(2);
    expect(list.length).to.equal(1);
  });

  it("Can list.append multiple elements", () => {
    const list = new List();
    for (let i = 0; i < 10; i++) {
      list.append(i);
      expect(list.at(i)).to.equal(i);
    }
    expect(list.length).to.equal(10);
  });

  it("Can list.prepend elements", () => {
    const list = new List();
    const arr = [];
    for (let i = 0; i < 10; i++) {
      list.prepend(i);
      arr.unshift(i);
    }
    expect(list.toArray()).to.deep.equal(arr);
  });

  it("Can return value at given index", () => {
    const list = new List();
    for (let i = 0; i < 10; i++) {
      list.append(i);
    }
    const arr = list.toArray();
    for (let i = -1; i < 11; i++) {
      expect(arr[i]).to.equal(list.at(i));
    }
  });

  it("Can insert value at the beggining of the list", () => {
    const list = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(list.insert(0, 0).toArray()[0]).to.equal(0);
  });

  it("Can insert value at the end of the list", () => {
    const list = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(list.insert(10, 0).toArray().pop()).to.equal(0);
  });

  it("Can insert value at a given index of the list", () => {
    const list = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(list.insert(10, 0).toArray().pop()).to.equal(0);
  });
});
