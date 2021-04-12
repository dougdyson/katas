function validate(password) {
  return /([a-z0-9][A-Z])/.test(password)
};

// alphanumeric only: \w{1,6}
// one upper case: [A-Z]
// one lower case: [a-z]
// one number: [0-9]
// no special characters: 
// <=6 length: {1.6}


validate('a1.b2c') //?
validate('!aB123') //?
validate('ab123!') //?
validate('!@#$%^') //?
validate('abcdefg') //?
validate('123456') //?
validate('abc123') //?
validate('abcdef') //?
validate('123') //?
validate('abc') //?
validate('AbC1') //?
validate('abC123') //?
validate('123aBC') //?


module.exports = validate;