'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let arr = [];
    if (!this.root) return arr;
    const traverse = (node) => {
      arr.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    if (!this.root) return arr;
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      arr.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return arr;
  }

  postOrder() {
    let arr = [];
    if (!this.root) return arr;
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      arr.push(node.value);
    };
    traverse(this.root);
    return arr;
  }

  findMaximumValue() {
    let max = this.root.value;
    const traverse = (node) => {
      if (max < node.value) {
        max = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return max;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }
  add(value) {
    if (!this.root) this.root = new Node(value);
    const traverse = (node) => {
      if (value < node.value) {
        if (node.left) {
          traverse(node.left);
        } else {
          node.left = new Node(value);
        }
      } else if (value > node.value) {
        if (node.right) {
          traverse(node.right);
        } else {
          node.right = new Node(value);
        }
      }
    };
    traverse(this.root);
  }
  contains(value) {
    let treeValues = this.inOrder();
    return treeValues.includes(value);
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) return tree;
  let fizzBuzzTree = new BinaryTree(new Node(tree.root.value));
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

    if (node.left) {
      fizzBuzzTreeNode.left = new Node(node.left.value);
      fizzBuzzTreeNode = fizzBuzzTreeNode.left;
      traverse(node.left);
    }

    if (node.right) {
      fizzBuzzTreeNode.right = new Node(node.right.value);
      fizzBuzzTreeNode = fizzBuzzTreeNode.right;
      traverse(node.right);
    }
  };
  traverse(tree.root);
  return fizzBuzzTree;
}

module.exports = { BinaryTree, BinarySearchTree, Node, fizzBuzzTree };
