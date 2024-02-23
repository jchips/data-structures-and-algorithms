'use strict';

const PseudoQueue = require('../PseudoQueue');

const pseudoQueue = new PseudoQueue;

describe('Pseudo queue', () => {
  test('Calling dequeue on an empty queue raises exception', () => {

    expect(pseudoQueue.dequeue()).toEqual('cannot dequeue when queue is empty');
  });

  test('Can successfully enqueue into a queue', () => {
    pseudoQueue.enqueue(5);

    expect(pseudoQueue.stack1.top.value).toEqual(5);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);

    expect(pseudoQueue.stack1.top.next.next.value).toEqual(5);
    expect(pseudoQueue.stack1.top.next.value).toEqual(10);
    expect(pseudoQueue.stack1.top.value).toEqual(15);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let dequeue = pseudoQueue.dequeue();

    expect(dequeue.value).toEqual(5);
    expect(pseudoQueue.stack1.top.next.value).toEqual(10);
  });
});
