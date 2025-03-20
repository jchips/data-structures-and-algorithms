# Insert Shift Array

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

![Code Challenge 2](code-challenge-2.jpg)

## Approach & Efficiency

To approve efficiency, this solution does not create a new array. It loops through the given array starting from the end and stopping halfway, shifts the values over, and inserts the given value (in the middle of the array).

## Solution

Paste code into editor with console.

Needs an array and a value (of any type) as parameters.

Log the result.

```javascript
function insertShiftArray(arr, value) {
  let end = (arr.length - 1) / 2;
  let start = arr.length - 1;
  while (start != Math.floor(end)) {
    arr[start + 1] = arr[start];
    start--;
  }
  arr[start + 1] = value;
  return arr;
}
```
