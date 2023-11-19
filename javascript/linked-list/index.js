'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let string = '';
    let current = this.head;
    while (current !== null) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
