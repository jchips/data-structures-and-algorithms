# Array Insert Shift

Write a function called `insert_shift_list` which takes in ~~an array~~ a list and a value to be added. Without utilizing any of the built-in methods available to your language, return ~~an array~~ a list with the new value added at the middle index.

## Whiteboard process

## Approach & Efficiency

## Solution

Call `insert_shift_list` with a list with values of any type, and a value.

```python
def insert_shift_list(arr, value):
  arr = arr + [None]
  count = 0
  for i in range(1, (len(arr) // 2) + 1):
      arr[-i] = arr[-i - 1]
      count = count + 1
  arr[count] = value
  return arr
```
