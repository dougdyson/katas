const scramble = require('./scramble');

describe("Simple tests", () => {
  it("returns true if a portion of str1 characters can be rearranged to match str2", () => {
    expect(scramble('rkqodlw', 'world')).toBe(true)
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true)
    expect(scramble('katas', 'steak')).toBe(false)
    expect(scramble('scriptjavx', 'javascript')).toBe(false)
    expect(scramble('scriptingjava', 'javascript')).toBe(true)
    expect(scramble('scriptsjava', 'javascripts')).toBe(true)
    expect(scramble('jscripts', 'javascript')).toBe(false)
    expect(scramble('aabbcamaomsccdd', 'commas')).toBe(true)
  })
});

describe("Very long random strings", () => {
  it("returns true if a portion of str1 characters can be rearranged to match str2", () => {
    expect(scramble('qwerrtyuioplkjhgfdsazxcvbnmnbvcxzasdfghjklpoiuytewq', 'asdfghjkllkjhgfdsa')).toBe(true)
  })
})