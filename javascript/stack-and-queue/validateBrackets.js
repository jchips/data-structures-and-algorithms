const { Stack } = require('./index');

const stack = new Stack();

function validateBrackets(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      stack.push(str[i]);
    }
    if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
      let bracket1 = stack.pop();
      if ((bracket1.value === '{' && str[i] !== '}')
        || (bracket1.value === '[' && str[i] !== ']')
        || (bracket1.value === '(' && str[i] !== ')')) {
        return false;
      }
    }
  }
  return true;
}

module.exports = validateBrackets;
