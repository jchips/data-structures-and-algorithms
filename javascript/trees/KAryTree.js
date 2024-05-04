'use strict';

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let arr = [];
    const traverse = (node) => {
      arr.push(node.value);
      if (node.children) {
        node.children.forEach(child => traverse(child));
      }
    };

    traverse(this.root);
    return arr;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) return tree;
  let fizzBuzzTree = new KAryTree(new Node(tree.root.value));
  let fizzBuzzTreeNode = fizzBuzzTree.root;
  const traverse = (node) => {
    if (node.value % 15 === 0) {
      fizzBuzzTreeNode.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      fizzBuzzTreeNode.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      fizzBuzzTreeNode.value = 'Buzz';
    } else {
      fizzBuzzTreeNode.value = node.value.toString();
    }

    if (node.children) {
      let parent = fizzBuzzTreeNode;
      node.children.forEach(child => {
        let length = parent.children.push(new Node(child.value));
        fizzBuzzTreeNode = parent.children[length - 1];
        traverse(child);
      });
    }
  };
  traverse(tree.root);
  return fizzBuzzTree;
}

function breadthFirst(tree) {
  if (!tree.root) return [];
  let result = [];
  let queue = [];

  queue.push(tree.root);

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);

    if (node.children) {
      node.children.forEach(child => {
        queue.push(child);
      });
    }
  }
  return result;
}

module.exports = { KAryTree, Node, fizzBuzzTree, breadthFirst };
