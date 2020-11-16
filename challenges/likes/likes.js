function likes(names) {

  // first iteration
  // ===============
  // if (names.length) {
  //   if (names.length === 1) return names[0] + ' likes this';
  //   if (names.length === 2) return names[0] + ' and ' + names[1] + ' like this';
  //   if (names.length === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  //   if (names.length >= 4) return names[0] + ', ' + names[1] + ' and ' + (names.length - 2)  + ' others like this';
  // }
  // return 'no one likes this';

  // second iteration
  // ================
  // use of switch can reduce amount of code and easier to read

  switch (names.length) {
    case 0:  return 'no one likes this'; break;
    case 1:  return names[0] + ' likes this'; break;
    case 2:  return names[0] + ' and ' + names[1] + ' like this'; break
    case 3:  return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2)  + ' others like this'; break;
  }

}

module.exports = likes;