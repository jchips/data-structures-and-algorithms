'use strict';

const Node = require('./Node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) this.rear.next = newNode;
    if (!this.front) this.front = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (this.isEmpty()) return 'cannot dequeue when queue is empty';
    let front = this.front;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    front.next = null;
    return front.value;
  }

  peek() {
    if (this.isEmpty()) return 'cannot peek when queue is empty';
    return this.front.value;
  }

  isEmpty() {
    if (!this.rear) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
