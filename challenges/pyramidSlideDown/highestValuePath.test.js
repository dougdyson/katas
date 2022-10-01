const highestValuePath = require('./highestValuePath');

describe("Tests", () => {
  it("test", () => {
    expect(highestValuePath([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]])).toBe(23)
  })
});
