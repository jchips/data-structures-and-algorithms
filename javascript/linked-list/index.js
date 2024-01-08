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
    while (current) {
      if (this.head.value === value) {
        this.head = new Node(addValue, this.head);
        break;
      } else if (current.next.value === value) {
        current.next = new Node(addValue, current.next);
        break;
      }
      current = current.next;
    }
  }

  insertAfter(value, addValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
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
    while (current) {
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
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function zipLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  if (!current1) {
    return list2;
  }
  while (current1 && current2) {
    list1.insertAfter(current1.value, current2.value);
    current1 = current1.next;
    current2 = current2.next;
    current1 = current1.next;
  }
  if (current2) {
    while (current2) {
      list1.append(current2.value);
      current2 = current2.next;
    }
  }
  return list1;
}

module.exports = { LinkedList, zipLists };
