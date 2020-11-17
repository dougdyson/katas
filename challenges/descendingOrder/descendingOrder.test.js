const descendingOrder = require('./descendingOrder');

test('sorts non-integer integers into highest possible number', () => {
  expect(descendingOrder(0)).toBe(0)
  expect(descendingOrder(1)).toBe(1)
  expect(descendingOrder(123456789)).toBe(987654321)
  expect(descendingOrder(1201)).toBe(2110);
});