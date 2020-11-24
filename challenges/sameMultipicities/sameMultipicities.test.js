// from:
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

const sameMultiplicity = require ('./sameMultipicities');

test('returns false if empty array passed as argument', () => { 
  expect(sameMultiplicity([], [])).toBe(false); 
})

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
test('returns true when the two arrays have the "same" elements, with the same multiplicities, regardless of the order.', () => { 
  expect(sameMultiplicity(a1, a2)).toBe(true); 
})

a3 = [122, 144, 19, 161, 19, 144, 19, 11];
test('returns false when the two arrays have the different elements, with the same multiplicities, regardless of the order.', () => { 
  expect(sameMultiplicity(a3, a2)).toBe(false); 
})