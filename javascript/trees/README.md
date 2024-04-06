# Implementation: Trees

## Code Challenge 15

Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

Binary Tree

- Create a Binary Tree class
  - Define a method for each of the depth first traversals:
    - pre order
    - in order
    - post order
  - Each depth first traversal method should return an array of values, ordered appropriately.

Binary Search Tree

- Create a Binary Search Tree class
  - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
    - Add
      - Arguments: value
      - Return: nothing
      - Adds a new node with that value in the correct location in the binary search tree.
    - Contains
      - Argument: value
      - Returns: boolean indicating whether or not the value is in the tree at least once.

### Whiteboard Process

No whiteboard

## Approach & Efficiency

Challenge 15: I read about trees and watched the lecture. Then followed the challenge directions. The Big-O for all the methods are O(n) time and space.

## Solution

Challenge 10: Run my code by making an instance of the BinaryTree or BinarySearchTree class I made. Add nodes to the BinaryTree by making instances of the Node class. Then you can use the methods I made for the classes and console.log the outputs if the method returns anything. Example:

    const BinaryTree = require('./index');
    const binaryTree = new BinaryTree(new Node(5));
    binaryTree.root.left = new Node(10);
    binaryTree.root.right = new Node(15);
    let inOrder = binaryTree.inOrder();
    console.log('output:', inOrder);
    // output: [ 10, 5, 15 ]

[Link to code for challenge 15](./index.js)
