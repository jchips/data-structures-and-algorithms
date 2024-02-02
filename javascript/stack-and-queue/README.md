# Implementation: Stacks and Queues

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

Node

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

Stack

- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- This object should be aware of a default empty value assigned to top when the stack is created.
- The class should contain the following methods:

  - push

        Arguments: value
        adds a new node with that value to the top of the stack with an O(1) Time performance.

  - pop

        Arguments: none
        Returns: the value from node from the top of the stack
        Removes the node from the top of the stack
        Should raise exception when called on empty stack

  - peek

        Arguments: none
        Returns: Value of the node located at the top of the stack
        Should raise exception when called on empty stack

  - is empty

        Arguments: none
        Returns: Boolean indicating whether or not the stack is empty.

Queue

- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
- This object should be aware of a default empty value assigned to front when the queue is created.
- The class should contain the following methods:

  - enqueue

    - Arguments: value
    - adds a new node with that value to the back of the queue with an O(1) Time performance.

  - dequeue

    - Arguments: none
    - Returns: the value from node from the front of the queue
    - Removes the node from the front of the queue
    - Should raise exception when called on empty queue

  - peek
    - Arguments: none
    - Returns: Value of the node located at the front of the queue
    - Should raise exception when called on empty stack

  - is empty
    - Arguments: none
    - Returns: Boolean indicating whether or not the queue is empty

## Whiteboard Process

No whiteboard

## Approach & Efficiency

I read about stacks and queues and looked at diagrams of what they visually looked like. I kept FILO and LIFO (stacks), and FIFO and LILO (queues) in mind. Then I wrote tests. The Big O for all the methods are O(1) for space and time because they all take a constant amount of time and space.

## Solution

Run my code by making an instance of the Stack and/or Queue class I made. Then you can use the methods I made for the class and console.log the outputs if the method returns anything. Example:

    const Stack = require('./index');
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    console.log('output:' stack.pop().value);
    // output: 10
