function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((a,c) => a * c);
  }
  return i;
}
// The V2 refactor above removes recursion and reduces code by 65%
// UPDATE: after reviewing V3 refactor, going with this one!

function persistenceV3(num) {
  return (num > 9)
    ? 1 + persistence(num.toString().split('').reduce((a,c) => a * c))
    : 0
}
// The V3 refactor above uses recursion but reduces code by 68%.
// From a risk perspective, feel it might be better to use the 
// V2 refactor, which doesn't use recursion nor if statements 
// and is only 3% larger. V2 also seems a bit easier to follow, 
// declaring key variables in one place (for statement) instead of 
// spreading them out in the logic.

function persistenceV1(num) {
  let persistCounter = 0;
  if (num > 9) {
    function persist(numbers) {
      const product = numbers.toString().split('').reduce((total, factor) => total * factor);
      persistCounter++;
      if (product > 9) {
        persist(product)
      }
    }
    persist(num);
  }
  return persistCounter;
}
// The above V1 of this code is horrible! Repeating some conditional logic, unnecessary conditional logic,
// and too verbose. Props for chaining functions though!

module.exports = persistence;