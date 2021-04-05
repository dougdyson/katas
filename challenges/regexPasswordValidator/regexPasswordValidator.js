function validate(password) {
  return /([0-9a-z][A-Z])/.test(password)
}


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