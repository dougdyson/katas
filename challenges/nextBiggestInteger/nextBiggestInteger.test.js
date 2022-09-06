const nextBiggestInteger = require('./nextBiggestInteger');

describe("Simple tests", () => {
  it("number should be next highest value compromised from available integers", () => {
    expect(nextBiggestInteger(12)).toBe(21)
    expect(nextBiggestInteger(144)).toBe(414) 
    expect(nextBiggestInteger(414)).toBe(441)
    expect(nextBiggestInteger(516)).toBe(561)
    expect(nextBiggestInteger(2017)).toBe(2071)
    expect(nextBiggestInteger(18)).toBe(81)
    expect(nextBiggestInteger(121)).toBe(211)
    expect(nextBiggestInteger(19633212)).toBe(19633221)
    expect(nextBiggestInteger(19633112)).toBe(19633121)
    expect(nextBiggestInteger(123456789)).toBe(123456798)
  });
});

describe("Edge cases", () => {
  it("reorder digits by finding next lowest integer and sort remainder by ascending order", () => {
    expect(nextBiggestInteger(3421)).toBe(4123)
    expect(nextBiggestInteger(19633221)).toBe(21123369)
  })
});



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