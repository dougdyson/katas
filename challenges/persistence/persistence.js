function persistence(num) {
  let persistCounter = 0;
  if (num > 9) {
    // below function is recursive
    function persist(numbers) {
      let product = 1;
      let nums = numbers.toString().split('');
      persistCounter = persistCounter + 1;
      for (let i = 0; i < nums.length; i++) {
        product *= parseInt(nums[i]);
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

// most popular, with reduce
// =========================
// function persistence(num) {
//   var times = 0;
//   num = num.toString();
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
//   return times;
// }

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