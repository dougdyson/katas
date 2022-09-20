const scramble = require('./scramble');

describe("Simple tests", () => {
  it("returns true if a portion of str1 characters can be rearranged to match str2", () => {
    expect(scramble('rkqodlw', 'world')).toBe(true);
  })
});