'use strict';

const Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node;
    if (this.peek()) {
      node = new Node(value, this.top);
    } else {
      node = new Node(value);
    }
    this.top = node;
  }

  pop() {
    if (this.isEmpty()) return 'cannot pop when stack is empty';
    let top = this.top;
    this.top = this.top.next;
    return top;
  }

  peek() {
    if (this.isEmpty()) return 'cannot peek when stack is empty';
    return this.top;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
