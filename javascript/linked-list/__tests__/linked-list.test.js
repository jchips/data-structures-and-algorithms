'use strict';

// Linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('instantiate empty linked list', () => {
    const linked = new LinkedList();

    expect(linked.head).toBeNull();
  });

  it('properly inserts into the linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);

    expect(linked.head.value).toEqual(5);
    expect(linked.head.next).toBeNull();
  });

  it('head property properly points to the first node in the linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);

    expect(linked.head.value).toEqual(10);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);

    expect(linked.head.value).toEqual(10);
    expect(linked.head.next.value).toEqual(5);
    expect(linked.head.next.next).toBeNull();
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);

    expect(linked.includes(5)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);

    expect(linked.includes(15)).toBeFalsy();
  });

  it('properly returns a string of all the values that exist in the linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);

    expect(linked.toString()).toEqual('{ 10 } -> { 5 } -> NULL');
  });

  // CODE CHALLENGE 6 TESTS

  it('add node to end of linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);
    linked.append(4);

    expect(linked.head.value).toEqual(10);
    expect(linked.head.next.value).toEqual(5);
    expect(linked.head.next.next.value).toEqual(4);
  });

  it('add multiple nodes to end of linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);
    linked.append(4);
    linked.append(3);

    expect(linked.head.value).toEqual(10);
    expect(linked.head.next.value).toEqual(5);
    expect(linked.head.next.next.value).toEqual(4);
    expect(linked.head.next.next.next.value).toEqual(3);
  });

  it('insert a node before a node located i the middle of a linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);
    linked.insertBefore(5, 15);

    expect(linked.head.value).toEqual(10);
    expect(linked.head.next.value).toEqual(15);
    expect(linked.head.next.next.value).toEqual(5);
  });

  it('insert a node before the first node of a linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);
    linked.insertBefore(10, 15);

    expect(linked.head.value).toEqual(15);
    expect(linked.head.next.value).toEqual(10);
    expect(linked.head.next.next.value).toEqual(5);
  });

  it('insert after a node in the middle of the linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);
    linked.insertAfter(10, 15);

    expect(linked.head.value).toEqual(10);
    expect(linked.head.next.value).toEqual(15);
    expect(linked.head.next.next.value).toEqual(5);
  });

  it('insert a node after the last node of the linked list', () => {
    const linked = new LinkedList();
    linked.insert(5);
    linked.insert(10);
    linked.insertAfter(5, 15);

    expect(linked.head.value).toEqual(10);
    expect(linked.head.next.value).toEqual(5);
    expect(linked.head.next.next.value).toEqual(15);
  });
});
