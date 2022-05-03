const nextBiggestInteger = require('./nextBiggestInteger');

describe("Simple tests", () => {
  it("number should be next highest value compromised from available integers", () => {
    expect(nextBiggestInteger(12)).toBe(21)
    expect(nextBiggestInteger(513)).toBe(531)
    expect(nextBiggestInteger(2017)).toBe(2071)
    expect(nextBiggestInteger(414)).toBe(441)
    expect(nextBiggestInteger(144)).toBe(414)
    expect(nextBiggestInteger(1234321)).toBe(1241233);
  });
});

describe('Negative tests', () => {
  it("should return false", () => {
    expect(nextBiggestInteger(333)).toBe(-1);
    expect(nextBiggestInteger(0)).toBe(-1);
  });
});

// describe('Random tests', () => {
//   for (let i = 0; i < 100; i++) {
//     let num = Math.floor(Math.random() * 100000);
//     it(`${num} should be next highest value`, () => {
//       expect(nextBiggestInteger(num)).toBe(num + 1);
//     });
//   }
// });