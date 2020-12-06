# Linked list and unit testing

Implement a linked list and unit test it.

## Setup
- Turn the current directory into a project by running `npm init` (only needed initially).
- Install a testing library (mocha and chai) with `npm install` - `npm install --save-dev mocha chai`
- Create a test file `linked-list.test.js`
- Export stuff from `linked-list.js` by using `module.exports`

```js
// first approach
module.exports.append = (value, list) => {
    ...
};

// better approach
module.exports = {
    append
};
```

- Write tests using `mocha` and `chai`
    - Load the `linked-list.js` module by using `require`:

```js
// linked-list.spec.js
const List = require('./linked-list');
// const { empty, append } = require('./linked-list');

List.empty();
List.append(1, someList);
```

- Run the tests
    - run `mocha` and tell it which files with tests to run - see `package.json` test script
    - the command is `npm test`
