def zip_lists(a, b):
    a_current = a.head
    b_current = b.head
    if not a_current:
        return b
    while a_current and b_current:
        a_next = a_current.next
        b_next = b_current.next
        a_current.next = b_current
        b_current.next = a_next
        a_current = a_next
        b_current = b_next
    while b_current:
        a.append(b_current)
        b_current = b_current.next
    return a
