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

## Code Challenge 16

Write the following method for the Binary Tree class

- find maximum value
  - Arguments: none
  - Returns: number
  - Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Code Challenge 17

Write a function called breadth first

- Arguments: tree
- Return: list of all values in the tree, in the order they were encountered
- NOTE: Traverse the input tree using a Breadth-first approach

## Whiteboard Process

No whiteboard

## Approach & Efficiency

Challenge 15: I read about trees and watched the lecture. Then followed the challenge directions. The Big-O for all the methods are O(n) time and space.

Challenge 16: I recorded every time the node value was greater than the max and then returned the max at the end. The Big-O for the findMaximumValue() method is O(n) time and O(1) space.

Challenge 17: I created a queue and added values to the output array as I dequeued them from the queue. If the node that was dequeued had any children, they were all added to the queue. The Big-O for the breadthFirst() function is O(n) time and space.

## Solution

Challenge 15: Run my code by making an instance of the BinaryTree or BinarySearchTree class I made. Add nodes to the BinaryTree by making instances of the Node class. Then you can use the methods I made for the classes and console.log the outputs if the method returns anything. Example:

    const BinaryTree = require('./index');
    const binaryTree = new BinaryTree(new Node(5));
    binaryTree.root.left = new Node(10);
    binaryTree.root.right = new Node(15);
    let inOrder = binaryTree.inOrder();
    console.log('output:', inOrder);
    // output: [ 10, 5, 15 ]

Challenge 17: Import/require the breadthFirst() function then use a tree as a parameter. The function will return an array with all the node values in the tree in breadth first order. If the given tree has no nodes/values, the array will be empty.

[Link to code for challenge 15](./index.js)

[Link to code for challenge 16](index.js)

[Link to code for challenge 17](./breadthFirst.js)
