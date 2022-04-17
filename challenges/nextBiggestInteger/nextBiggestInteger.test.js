const nextBiggestInteger = require('./nextBiggestInteger');

describe("Simple tests", () => {
  it("Number shouldbe next highest value compromised from available integers", () => {
    expect(nextBiggestInteger(12)).toBe(21)
    expect(nextBiggestInteger(513)).toBe(531)
    expect(nextBiggestInteger(2017)).toBe(2071)
    expect(nextBiggestInteger(414)).toBe(441)
    expect(nextBiggestInteger(144)).toBe(414)
    expect(nextBiggestInteger(1234321)).toBe(1241233);
  });
});