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

## Code Challenge 18

Write a function called fizz buzz tree

- Arguments: k-ary tree
- Return: new k-ary tree
- Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

  - If the value is divisible by 3, replace the value with “Fizz”
  - If the value is divisible by 5, replace the value with “Buzz”
  - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
  - If the value is not divisible by 3 or 5, simply turn the number into a String.

## Whiteboard Process

No whiteboard

## Approach & Efficiency

Challenge 15: I read about trees and watched the lecture. Then followed the challenge directions. The Big-O for all the methods are O(n) time and space.

Challenge 16: I recorded every time the node value was greater than the max and then returned the max at the end. The Big-O for the findMaximumValue() method is O(n) time and O(1) space.

Challenge 17: I created a queue and added values to the output array as I dequeued them from the queue. If the node that was dequeued had any children, they were all added to the queue. The Big-O for the breadthFirst() function is O(n) time and space.

Challenge 18: I created a new K-ary tree and then made as it a copy of the given tree but with fizzbuzz values instead. The Big-O for the fizzBuzzTree() function is O(n) time and space. n is the amount of nodes in the given tree. It uses additional space by creating a new tree. I made one for binary trees as well in the `index.js` file.

## Solution

Challenge 15: Run code by making an instance of the `BinaryTree` or `BinarySearchTree` class. Add nodes to the BinaryTree by making instances of the `Node` class. Then use the methods for the classes and `console.log()` the outputs to see the results if the method returns anything. Example:

    const BinaryTree = require('./index');
    const binaryTree = new BinaryTree(new Node(5));
    binaryTree.root.left = new Node(10);
    binaryTree.root.right = new Node(15);
    let inOrder = binaryTree.inOrder();
    console.log('output:', inOrder);
    // output: [ 10, 5, 15 ]

Challenge 17: Import/require the `breadthFirst()` function then use a tree as a parameter. The function will return an array with all the node values in the tree in breadth first order. If the given tree has no nodes/values, the array will be empty.

Challenge 18: Run code by making an instance of the `KAryTree` class. Add nodes to the class by making instances of the `Node` class. Print the output of the `fizzBuzzTree()` method with the `KAryTree` instance as a parameter using a `console.log()`to see the results.

[Link to code for challenge 15](./index.js)

[Link to code for challenge 16](index.js)

[Link to code for challenge 17](./breadthFirst.js)

[Link to code for challenge 18](./KAryTree.js);
