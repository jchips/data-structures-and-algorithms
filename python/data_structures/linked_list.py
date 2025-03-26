class Node:
  """
  Node class for linked lists.
  Attributes:
    value (any): The value in the node.
    next (Node): The next node in the linked list.
  """
  def __init__(self, value, _next=None):
    self.value = value
    self.next = _next

  def __str__(self):
    return str(self.value)

  def __repr__(self):
    return f'Node({self.value}) -> {self.next}'


class LinkedList:
  """
  Linked list implementation.
  Attributes:
    head (Node): The first node in the linked list.
  """

  def __init__(self, head=None):
    self.head = head

  def __str__(self):
    return self.to_string()

  def insert(self, value):
    """Takes a value of any type and adds it to the linked list."""
    self.head = Node(value, self.head)

  def includes(self, value):
    """
    Indicates whether value exists as a Node value somewhere within the list.
    Arguments:
      value (any): Values to check if exists.
    Returns: (Boolean): Whether value exists or not.
    """
    current = self.head
    while current:
      if current.value == value:
        return True
      current = current.next
    else:
      return False

  def to_string(self):
    """Returns string represention of linked list (__str__)."""
    string = ''
    current = self.head
    while current:
      string += f'{{ {current.value} }} -> '
      current = current.next
    else:
      string += 'NULL'
    return string

  def append(self, value):
    current = self.head
    while current.next:
      current = current.next
    else:
      new_node = Node(value)
      current.next = new_node

  def insert_before(self, value, add_value):
    """Inserts new Node before another given Node already in the list."""
    current = self.head
    prev = None
    while current:
      if current.value == value:
        if prev:
          prev.next = Node(add_value, current)
        else:
          self.insert(add_value)
        break
      prev = current
      current = current.next
    else:
      raise TargetError


  def insert_after(self, value, add_value):
    """Inserts new Node after another given Node already in the list."""
    current = self.head
    while current:
      if current.value == value:
        current.next = Node(add_value, current.next)
        break
      current = current.next
    else:
      raise TargetError

class TargetError(Exception):
  pass
