const nextBiggestInteger = require('./nextBiggestInteger');

describe("Simple tests", () => {
  it("number should be next highest value compromised from available integers", () => {
    expect(nextBiggestInteger(144)).toBe(414) 
    expect(nextBiggestInteger(12)).toBe(21)
    expect(nextBiggestInteger(414)).toBe(441)
    expect(nextBiggestInteger(516)).toBe(561)
    expect(nextBiggestInteger(2017)).toBe(2071)
    expect(nextBiggestInteger(19)).toBe(91)
    expect(nextBiggestInteger(121)).toBe(211)
    expect(nextBiggestInteger(123456789)).toBe(123456798)
    expect(nextBiggestInteger(19633212)).toBe(19633221)
  });
});

describe("Edge cases", () => {
  it("reorder digits by finding next lowest integer and sort remainder by ascending order", () => {
    expect(nextBiggestInteger(19633221)).toBe(21123369)
  })
});

// Swapping approach: from the left, swap lower digit with higher digit appended to the right
// and keep swapping/appending until the next higher digit is found
// 19633221         121
// 19633212         112
// 19633122         211
// 19631223
// 19612233
// 19122336
// 11223369 -> no more swapping possible
// 12123369 -> work from left to right to find the next highest digit and swap it
// 21123369 -> swap lower digit with higher digit, do until greater than original number


describe('Negative tests', () => {
  it("should return -1", () => {
    expect(nextBiggestInteger(333)).toBe(-1);
    expect(nextBiggestInteger(0)).toBe(-1);
    expect(nextBiggestInteger('')).toBe(-1);
    expect(nextBiggestInteger(null)).toBe(-1);
    expect(nextBiggestInteger(undefined)).toBe(-1);
    expect(nextBiggestInteger(-1)).toBe(-1);
    expect(nextBiggestInteger(NaN)).toBe(-1);
  });
});