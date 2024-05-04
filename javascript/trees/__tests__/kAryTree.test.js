'use strict';

const { KAryTree, Node, breadthFirst, fizzBuzzTree } = require('../KAryTree');

describe('K-Ary tree tests', () => {
  test('fizzBuzzTree() returns a new fizz buzz tree', () => {
    const kAryTree = new KAryTree(new Node(45));
    kAryTree.root.children = [new Node(5), new Node(9)];
    kAryTree.root.children[0].children = [new Node(30), new Node(55), new Node(4)];
    kAryTree.root.children[1].children = [new Node(2)];

    expect(fizzBuzzTree(kAryTree).preOrder()).toEqual(['FizzBuzz', 'Buzz', 'FizzBuzz', 'Buzz', '4', 'Fizz', '2']);
    expect(kAryTree.preOrder()).toEqual([45, 5, 30, 55, 4, 9, 2]);
    expect(breadthFirst(fizzBuzzTree(kAryTree))).toEqual(['FizzBuzz', 'Buzz', 'Fizz', 'FizzBuzz', 'Buzz', '4', '2']);
  });
  test('if there\'s no tree given, fizzBuzzTree returns unchanged tree', () => {
    const kAryTree = new KAryTree();

    expect(fizzBuzzTree(kAryTree)).toEqual(kAryTree);
  });
});
