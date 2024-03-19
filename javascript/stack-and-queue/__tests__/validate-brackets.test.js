'use strict';

const validateBrackets = require('../validateBrackets');

describe('validateBrackets', () => {
  test('Outputs true when expected', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
    expect(validateBrackets('(){}[[]]')).toBe(true);
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });

  test('Outputs false when expected', () => {
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(](')).toBe(false);
    expect(validateBrackets('{(})')).toBe(false);
  });

  test('If string value is empty, return true', () => {
    expect(validateBrackets('')).toBe(true);
  });
});
