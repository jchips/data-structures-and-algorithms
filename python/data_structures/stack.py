from data_structures.node import Node


class Stack:
    """
    Put docstring here
    """

    def __init__(self, top=None):
        self.top = top

    def __str__(self):
        string = ''
        current = self.top
        while current:
            string += f'{{ {current.value} }} -> '
            current = current.next_node
        else:
            string += 'NULL'
        return string

    def push(self, value):
        top = self.top if self.top else None
        self.top = Node(value, top)

    def pop(self):
        if self.top is None:
            raise EmptyStackError
        top_value = self.top.value
        self.top = self.top.next_node
        return top_value

    def peek(self):
        if self.top is None:
            raise EmptyStackError
        return self.top.value

    def is_empty(self):
        if self.top is None:
            return True
        return False


class EmptyStackError(Exception):
    pass
