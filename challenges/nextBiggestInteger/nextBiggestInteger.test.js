const nextBiggestInteger = require('./nextBiggestInteger');

describe("Tests", () => {
  it("test", () => {
    expect(nextBiggestInteger(12)).toBe(21)
    expect(nextBiggestInteger(513)).toBe(531)
    expect(nextBiggestInteger(2017)).toBe(2071)
    expect(nextBiggestInteger(414)).toBe(441)
    expect(nextBiggestInteger(144)).toBe(414)
  });
});