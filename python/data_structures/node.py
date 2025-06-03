class Node:
    """
    Node class.
    Attributes:
        value (any): The value in the node.
        next_node (Node): The next node.
  """

    def __init__(self, value, next_node=None):
        self.value = value
        self.next_node = next_node

    def __str__(self):
        return str(self.value)

    def __repr__(self):
        return f'Node({self.value}) -> {self.next_node}'
