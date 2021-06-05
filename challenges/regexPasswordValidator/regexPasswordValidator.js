function validate(password) {
  
  if (/(?=.*[!@#$%^&*])/.test(password)) {
    return false
  }

  return /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)
         ? true
         : false
}

validate('a1.b2c') //?
validate('!aB123') //?
validate('ab123!') //?
validate('!@#$%^aA') //?
validate('abcdefg') //?
validate('abcdefg1B') //?
validate('123456') //?
validate('abc123') //?
validate('abcdef') //?
validate('123') //?
validate('abc') //?
validate('AbC1') //?
validate('abC123') //?
validate('123aBC') //?
validate('ABCDEF') //?
validate('abcDEF') //?


module.exports = validate;