'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('../index');
const breadthFirst = require('../breadthFirst');

let binaryTree;
let bst = new BinarySearchTree();

describe('trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    expect(tree).toEqual({ root: null });
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    binaryTree = new BinaryTree(new Node(5));

    expect(binaryTree).toEqual({ root: { value: 5, left: null, right: null } });
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bst.add(20);
    bst.add(5);
    bst.add(25);

    expect(bst).toEqual({ root: { value: 20, left: { value: 5, left: null, right: null }, right: { value: 25, left: null, right: null } } });
  });
  test('Can successfully return a collection from a pre-order traversal', () => {
    binaryTree.root.left = new Node(10);
    binaryTree.root.right = new Node(15);

    expect(binaryTree.preOrder()).toEqual([5, 10, 15]);
  });
  test('Can successfully return a collection from an in-order traversal', () => {
    expect(binaryTree.inOrder()).toEqual([10, 5, 15]);
  });
  test('Can successfully return a collection from a post-order traversal', () => {
    expect(binaryTree.postOrder()).toEqual([10, 15, 5]);
  });
  test('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    bst.add(15);
    bst.add(30);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(10)).toBe(false);
  });
  test('Returns empty arrays for traversals with no root node', () => {
    let tree = new BinaryTree();

    expect(tree.preOrder()).toEqual([]);
    expect(tree.inOrder()).toEqual([]);
    expect(tree.postOrder()).toEqual([]);
  });
  test('findMaximumValue() gives expected result', () => {
    expect(binaryTree.findMaximumValue()).toEqual(15);
  });
  test('breathFirst() returns array with expected values', () => {
    const tree = new BinaryTree(new Node(2));
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);

    expect(breadthFirst(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
  test('breathFirst() returns empty array if given empty tree', () => {
    const tree = new BinaryTree();

    expect(breadthFirst(tree)).toEqual([]);
  });
});
