# Graph traversals

## Depth-first search

### Problems

#### Traverse the DOM

Implement a function that accepts a dom element and prints all the tag names of all of it's descendants.

```js
const traverseDom = (currentRoot) => {
  // implementation
};
```

Examples:

```html
<section id="test-root">
  <span>Zdrasti</span>
  <div>
    <ul class="za6to-da-polzvam-lainux">
      <li>za6toto 6te se naucha <img src="nz-brat" /></li>
      <li>za6toto e po-Odobno</li>
      <li>AS SAM VEGAN11!<br /></li>
    </ul>
  </div>
</section>
```

```js
// If you have the following html in your page, consider the following snippet
const startRoot = document.querySelector("#test-root");
traverseDom(startRoot);

// this should produce output similar to this:
SECTION;
SPAN;
DIV;
UL;
LI;
IMG;
LI;
LI;
BR;
```

```js
// this should print the tag name for each element in the dom tree
traverseDom(document);
```

TASK 2 -> take second paramete - Tag name -> when a node is with this tag name skip it!
