function persistence(num) {
  let persistCounter = 0;
  if (num > 9) {
    function persist(numbers) {
      let product = 1;
      let nums = numbers.toString().split('');
      persistCounter = persistCounter + 1;
      for (let i = 0; i < nums.length; i++) {
        product = product * parseInt(nums[i]);
      }
      if (product > 9) {
        persist(product)
      }
    }
    persist(num);
  }
  return persistCounter;
}
module.exports = persistence;

// shorter with reduce..
// =====================
// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num.toString().split('').reduce((t, c) => c * t);
//   }
//   return i;
// }

// even shorter reduce with ternerary
// ======================
// const persistence = num => {
//   return `${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0;
// }