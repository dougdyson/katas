function validate(password) {
  return /([a-z][A-Z]\d.){1,6}/.test(password)

}

validate('a1.b2c') //?
validate('!ab123') //?
validate('ab123!') //?
validate('!@#$%^') //?
validate('abcdefg') //?
validate('123456') //?
validate('abc123') //?
validate('abcdef') //?
validate('123') //?
validate('abc') //?
validate('abC') //?
validate('abC123') //?
validate('123aB') //?


module.exports = validate;