'use strict';

let { Stack } = require('../index');
let { Queue } = require('../index');

let stack = new Stack();
let queue = new Queue();

describe('Stacks', () => {
  test('Can successfully push onto a stack', () => {
    stack.push(5);

    expect(stack.top.value).toEqual(5);
  });

  test('Can successfully push multiple values onto a stack', () => {
    stack.push(10);
    stack.push(15);

    expect(stack.top.value).toEqual(15);
    expect(stack.top.next.value).toEqual(10);
    expect(stack.top.next.next.value).toEqual(5);
  });

  test('Can successfully pop off the stack', () => {
    let pop = stack.pop();

    expect(pop.value).toEqual(15);
    expect(stack.top.value).toEqual(10);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    stack.push(5);
    stack.push(10);

    expect(stack.peek().value).toEqual(10);
  });

  test('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();

    expect(newStack.top).toBeNull;
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    let newStack = new Stack();

    expect(newStack.pop()).toEqual('cannot pop when stack is empty');
    expect(newStack.peek()).toEqual('cannot peek when stack is empty');
  });
});

describe('Queues', () => {
  test('Can successfully enqueue into a queue', () => {
    queue.enqueue(5);

    expect(queue.rear.value).toEqual(5);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(10);
    queue.enqueue(15);

    expect(queue.front.value).toEqual(5);
    expect(queue.front.next.value).toEqual(10);
    expect(queue.rear.value).toEqual(15);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let dequeue = queue.dequeue();

    expect(dequeue.value).toEqual(5);
    expect(queue.front.value).toEqual(10);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek().value).toEqual(10);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();

    expect(newQueue.front).toBeNull;
    expect(newQueue.rear).toBeNull;
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    let newQueue = new Queue();

    expect(newQueue.peek()).toEqual('cannot peek when queue is empty');
    expect(newQueue.dequeue()).toEqual('cannot dequeue when queue is empty');
  });
});
