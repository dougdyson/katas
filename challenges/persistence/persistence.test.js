// from:
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript

const persistence = require('./persistence');
  
it('returns the number of times you must multiply the digits in num until you reach a single digit', function () {
    expect(persistence(4)).toBe(0);
    expect(persistence(39)).toBe(3);
    expect(persistence(25)).toBe(2);
    expect(persistence(999)).toBe(4);
});