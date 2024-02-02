'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

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
    return front;
  }

  peek() {
    if (this.isEmpty()) return 'cannot peek when queue is empty';
    return this.front;
  }

  isEmpty() {
    if (!this.rear) {
      return true;
    }
    return false;
  }
}

module.exports = { Stack, Queue };
