const User = require('./userClass.js'); //?

const NewUser = new User(); //?

test('Class successfully created', () => {
  expect(NewUser.exists).toBe(true)
});