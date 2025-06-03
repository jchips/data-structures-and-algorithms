from data_structures.node import Node
from data_structures.invalid_operation_error import InvalidOperationError


class Queue:
    """
    Queue implementation.
    Attributes:
        front (Node): The front node in the queue.
        rear (Node): The rear (last) node in the queue.
    """

    def __init__(self, front=None):
        self.front = front
        self.rear = self.front

    def __str__(self):
        string = ''
        current = self.front
        while current:
            string += f'{{ {current.value} }} -> '
            current = current.next_node
        else:
            string += 'NULL'
        return string

    def enqueue(self, value):
        new_node = Node(value)
        if self.rear:
            self.rear.next_node = new_node
        if not self.front:
            self.front = new_node
        self.rear = new_node

    def dequeue(self):
        if self.is_empty():
            raise InvalidOperationError(
                "Method not allowed on empty collection")
        temp = self.front
        self.front = self.front.next_node
        temp.next_node = None
        if not self.front:
            self.rear = None
        return temp.value

    def peek(self):
        if self.is_empty():
            raise InvalidOperationError(
                "Method not allowed on empty collection")
        return self.front.value

    def is_empty(self):
        if not self.front and not self.rear:
            return True
        return False
