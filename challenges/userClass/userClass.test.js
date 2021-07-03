const User = require('./userClass.js'); //?

test('Class successfully created with default rank of -8', () => {
  const NewUser = new User(); //?
  expect(NewUser.rank).toBe(-8)
});