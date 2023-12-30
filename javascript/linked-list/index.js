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

  append(addValue) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(addValue);
  }

  insertBefore(value, addValue) {
    let current = this.head;
    while(current) {
      if (this.head.value === value) {
        this.head = new Node(addValue, this.head);
        break;
      } else if(current.next.value === value) {
        current.next = new Node(addValue, current.next);
        break;
      }
      current = current.next;
    }
  }

  insertAfter(value, addValue) {
    let current = this.head;
    while(current) {
      if(current.value === value) {
        current.next = new Node(addValue, current.next);
        break;
      }
      current = current.next;
    }
  }

  kthFromEnd(k) {
    let current = this.head;
    let arrCount = 0;
    let arr = [];
    while(current) {
      arr[arrCount] = current.value;
      current = current.next;
      arrCount++;
    }
    let fromEnd = arrCount - k;
    if (fromEnd <= 0 || k < 0) {
      return 'Exception';
    }
    let value = arr[fromEnd - 1];
    return value;
  }
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
