const { expect } = require("chai");
const List = require("./linked-list");

describe("Linked list", () => {
  it("Can List.append one item at the end", () => {
    const list = List.empty();
    List.append(8, list);
    expect(List.get(0, list)).to.equal(8);
  });

  it("Can List.append multiple items and List.get them", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];

    const list = List.empty();
    for (let i = 0; i < nums.length; ++i) {
      expect(List.get(i, list)).to.be.undefined;
      List.append(nums[i], list);
      expect(List.get(i, list)).to.equal(nums[i]);
    }
  });

  it("Can convert to array with List.toArray", () => {
    const list = List.empty();
    const nums = [1, 2, 3, 4];
    nums.forEach((x) => List.append(x, list));

    const arr = List.toArray(list);
    expect(arr).to.deep.equal(nums);
  });

  it("Can use List.length to get the length", () => {
    const list = List.empty();

    for (let i = 0; i < 12; ++i) {
      expect(List.length(list)).to.equal(i);
      List.append(i, list);
    }
  });

  it("Can List.prepend multiple items and List.get them", () => {
    const list = List.empty();

    for (let i = 0; i < 20; ++i) {
      List.prepend(i, list);
      expect(List.get(0, list)).to.equal(i);
    }
  });

  it("Can List.removeAt items from the beginning", () => {
    const list = List.empty();
    List.append(1, list);
    List.append(2, list);
    List.append(3, list);
    List.append(4, list);
    List.append(5, list);

    List.removeAt(0, list);
    expect(List.get(0, list)).to.equal(2);
  });

  it("Can List.removeAt items from the middle", () => {
    const list = List.empty();
    List.append(1, list);
    List.append(2, list);
    List.append(3, list);
    List.append(4, list);
    List.append(5, list);

    List.removeAt(1, list);
    expect(List.get(0, list)).to.equal(1);
    expect(List.get(1, list)).to.equal(3);

    List.removeAt(1, list);
    expect(List.get(0, list)).to.equal(1);
    expect(List.get(1, list)).to.equal(4);
  });

  it("Can List.removeAt items from the end", () => {
    const list = List.empty();
    List.append(1, list);
    List.append(2, list);
    List.append(3, list);
    List.append(4, list);
    List.append(5, list);

    List.removeAt(4, list);
    expect(List.get(3, list)).to.equal(4);
    expect(List.get(4, list)).to.be.undefined;
    expect(List.length(list)).to.equal(4);
  });

  it.skip("Can use List.reverse to get the elements in reverse order", () => {
    const input = [
      "on1 - on none",
      "chabata",
      "kiro",
      "krisko",
      "gery-nikol",
      "duner4e",
    ];

    const list = List.empty();
    input.forEach((x) => List.append(x, list));

    expect(List.toArray(List.reverse(list))).to.deep.equal(input.reverse());
  });

  it("Can use List.insert to insert stuff", () => {
    const list = List.empty();
    for (let i = 0; i < 10; ++i) {
      List.append(i, list);
    }

    List.insert("kiro", 4, list);
    expect(List.get(4, list)).to.equal("kiro", "insert in middle");

    List.insert("pe6o", 0, list);
    expect(List.get(0, list)).to.equal("pe6o", "insert at beginning");

    List.insert("to6o", List.length(list) - 1, list);
    expect(List.get(List.length(list) - 1, list)).to.equal(
      "to6o",
      "insert at end"
    );
  });

  it("Can use List.remove to remove items", () => {
    const list = List.empty();
    for (let i = 0; i < 33; ++i) {
      List.append(i, list);
    }

    for (let i = 10; i < 22; ++i) {
      List.remove(i, list);
    }

    for (let i = 0; i < 10; ++i) {
      expect(List.get(i, list)).to.equal(i);
    }

    for (let i = 22; i < 33; ++i) {
      expect(List.get(i - 12, list)).to.equal(i);
    }

    List.remove(0, list);
    expect(List.get(0, list)).to.equal(1, "remove at beginning");

    List.remove(32, list);
    expect(List.get(List.length(list) - 1, list)).to.equal(31, "remove at end");
  });
});
