# Linked List Implementation

## Code Challenge 5

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

- Create a Linked List class

      Within your Linked List class, include a head property.
      Upon instantiation, an empty Linked List should be created.

    The class should contain the following methods:

  - insert

        Arguments: value
        Returns: nothing
        Adds a new node with that value to the head of the list with an O(1) Time performance.

  - includes

        Arguments: value
        Returns: Boolean
        Indicates whether that value exists as a Node’s value somewhere within the list.

  - to string

        Arguments: none
        Returns: a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"

## Code Challenge 6

Write the following methods for the Linked List class:

- append

      arguments: new value
      adds a new node with the given value to the end of the list

- insert before

      arguments: value, new value
      adds a new node with the given new value immediately before the first node that has the value specified

- insert after

      arguments: value, new value
      adds a new node with the given new value immediately after the first node that has the value specified

## Whiteboard Process

No whiteboard

## Approach & Efficiency

I just did exactly what the instructions told me.

- I think the Big-O for the insert() method is O(1) because it takes the same amount of time to run for any input.
- The Big-O for the includes() method is also O(1) I think because of the same reason.
- The Big-O for the toString() method is O(n) because it runs n times.
- The Big-O for the append() method is O(n) because it runs n times.
- The Big-O for the insertBefore method is O(n) because it runs n times.
- The Big-O for the insertAfter() method is O(n) because it runs n times.

## Solution

Run my code by making an instance of the LinkedList class I made. Then you can use the methods I made for the class and console.log the outputs if the method returns anything. Example:

```javascript
const LinkedList = require('./index');
const linked = new LinkedList();
linked.insert(5);
linked.insert(10);
console.log(linked.toString());
/// console: { 10 } -> { 5 } -> NULL
```
