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
    expect(list.insert(10, 0).toArray()[3]).to.equal(4);
  });

  it("Can create array from list", () => {
    const list = List.of(1, 2, 3, 4, 5, 6);
    expect(list.toArray()).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it("To array from empty list returns empty array", () => {
    const list = new List();
    expect(list.toArray()).to.deep.equal([]);
  });

  it("Can reverse a List", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const list = List.from(arr);
    expect(list.reverse().toArray()).to.deep.equal(arr.reverse());
  });

  it("Can reverse empty list", () => {
    const arr = [];
    const list = new List();
    expect(list.reverse().toArray()).to.deep.equal(arr);
  });

  it("Can remove from list by value", () => {
    const arr = [1, 2, 3, 4, 5];
    const list = List.from(arr);
    list.remove(1);
    list.remove(5);
    list.remove(3);
    expect(list.toArray()).to.deep.equal([2, 4]);
  });

  it("Can remove from list by inex", () => {
    const arr = [1, 2, 3, 4, 5];
    const list = List.from(arr);
    list.removeAt(0);
    list.removeAt(3);
    list.removeAt(1);
    expect(list.toArray()).to.deep.equal([2, 4]);
  });

  it("Can copy list with slice", () => {
    const list = List.of(1, 2, 3, 4, 5);
    const newlist = list.slice();
    expect(newlist).to.deep.equal(list);
  });
});
