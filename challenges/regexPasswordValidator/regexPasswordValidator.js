function validate(password) {
  let regexp = /^(?=.{6,})/;
  return regexp.test(password)
         ? true
         : false
}

// function validate(password) {
  
//   if (?=.{8,}./test(password)) return false;

//   if (function validate(password) {
  
//   if (password.length < 6) return false;

//   if (!/^(?=.*[a-z])/.test(password)) {
//     return false;
//   }

//   if (!/[A-Z]/.test(password)) {
//     return false;
//   }

//   if (!/[0-9]/.test(password)) {
//     return false;
//   }

//   if (/[.!?\\-]/.test(password)) {
//     return false;
//   }

//   // return true;
//   // if (/.test(password)) {
//   //   return false;
//   // }

//   if (!/[A-Z]/.test(password)) {
//     return false;
//   }

//   if (!/[0-9]/.test(password)) {
//     return false;
//   }

//   if (/[.!?\\-]/.test(password)) {
//     return false;
//   }

//   return true;
// }

// alphanumeric only: \w{1,6}
// one upper case: [A-Z]
// one lower case: [a-z]
// one number: [0-9]
// no special characters: 
// <=6 length: {1.6}
// How to concatenate/combine regex parameters?


// validateV1('a1.b2c') //?
// validateV1('!aB123') //?
// validateV1('ab123!') //?
// validateV1('!@#$%^') //?
validate('abcdefg') //?
// validateV1('abcdefg1B') //?
validate('123456') //?
// validateV1('abc123') //?
validate('abcdef') //?
validate('123') //?
validate('abc') //?
validate('AbC1') //?
// validateV1('abC123') //?
validate('123aBC') //?


module.exports = validate;