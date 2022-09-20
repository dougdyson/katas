const scramble = require('./scramble');

describe("Simple tests", () => {
  it("number should be next highest value compromised from available integers", () => {
    expect(scramble('rkqodlw')).toBe('world')
  })
});