function likes(names) {
  
  // second iteration
  // ================
  // use of switch reduces 2% of code and easier to read
  
  switch (names.length) {
    case 0:  return 'no one likes this'; break;
    case 1:  return names[0] + ' likes this'; break;
    case 2:  return names[0] + ' and ' + names[1] + ' like this'; break
    case 3:  return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2)  + ' others like this'; break;
  }
}
1 - 400 / 410; //?
module.exports = likes;

// first iteration
// ===============
function likesV1(names){
  if (names.length) {
    if (names.length === 1) return names[0] + ' likes this';
    if (names.length === 2) return names[0] + ' and ' + names[1] + ' like this';
    if (names.length === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    if (names.length >= 4) return names[0] + ', ' + names[1] + ' and ' + (names.length - 2)  + ' others like this';
  }
  return 'no one likes this';
}