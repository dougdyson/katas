const scramble = require('./scramble');

describe("Simple tests", () => {
  it("returns true if a portion of str1 characters can be rearranged to match str2", () => {
    expect(scramble('rkqodlw', 'world')).toBe(true)
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true)
    expect(scramble('katas', 'steak')).toBe(false)
  })
});