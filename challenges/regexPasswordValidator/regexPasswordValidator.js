const validate = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\w{6,}$/.test(password);

module.exports = validate;