const { Stack } = require('./index');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack1.isEmpty()) return 'cannot dequeue when queue is empty';
    while (!this.stack1.isEmpty()) this.stack2.push(this.stack1.pop().value);
    let frontElement = this.stack2.pop();
    while (!this.stack2.isEmpty()) this.stack1.push(this.stack2.pop().value);
    return frontElement;
  }
}

module.exports = PseudoQueue;
