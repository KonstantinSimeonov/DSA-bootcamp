/**
 *
 * @param {HTMLElement} currentRoot
 */
const traverseDom = (currentRoot) => {
  console.log(currentRoot.tagName);
  for (let children of currentRoot.children) {
    traverseDom(children);
  }
};

const traverseDomIt = (currentRoot) => {
  const nodes = [currentRoot];
  while (nodes.length > 0) {
    const currentNode = nodes.pop();
    console.log(currentNode.tagName);
    for (let i = 0; i < currentNode.children.length; i++) {
      nodes.push(currentNode.children[i]);
    }
  }
};

const startRoot = document.querySelector("#test-root");
traverseDomIt(document);
