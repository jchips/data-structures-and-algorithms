'use strict';

function breadthFirst(tree) {
  if (!tree.root) return [];
  let result = [];
  let queue = [];

  queue.push(tree.root);

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}

module.exports = breadthFirst;
