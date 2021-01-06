/**
 *
 * @param {HTMLElement} currentRoot
 */
const traverseDom = (currentRoot, fn) => {
  fn(currentRoot);
  for (let child of currentRoot.children) {
    traverseDom(child, fn);
  }
};

const traverseDomIt = (currentRoot, fn) => {
  const nodes = [currentRoot];
  while (nodes.length > 0) {
    const currentNode = nodes.pop();
    fn(currentNode);
    for (let i = 0; i < currentNode.children.length; i++) {
      nodes.push(currentNode.children[i]);
    }
  }
};

const startRoot = document.querySelector("#test-root");

const testSelectors = ["#test-root", ".za6to-da-polzvam-lainux", "body"];
/**
 *
 * @param {string[]} selectors
 */
const countLis = (selectors) => {
  const lis = new Set();
  selectors.forEach((selector) => {
    traverseDom(document.querySelector(selector), (x) => {
      if (x.tagName === "LI") {
        lis.add(x);
      }
    });
  });
  console.log(lis.size);
};

countLis(testSelectors);
