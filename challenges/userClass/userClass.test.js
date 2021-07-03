const User = require('./userClass.js');

test('Class successfully created with default rank of -8', () => {
  const NewUser = new User();
  expect(NewUser.rank).toBe(-8)
});

test('Class successfully created with default progress of 0', () => {
  const NewUser = new User();
  expect(NewUser.rank).toBe(-8);
  expect(NewUser.progress).toBe(0)
});

test('Completing an activity that is ranked the same as that of the user will be worth 3 points', () => {
  const NewUser = new User();
  NewUser.incProgress(-8);
  expect(NewUser.rank).toBe(-8);
  expect(NewUser.progress).toBe(3)
});

test('User ranked -8 completes an activity ranked -7 they will receive 10 progress', () => {
  const NewUser = new User();
  NewUser.incProgress(-7);
  expect(NewUser.rank).toBe(-8);
  expect(NewUser.progress).toBe(10)
});

test('User ranked -8 completes an activity ranked -6 they will receive 40 progress', () => {
  const NewUser = new User();
  NewUser.incProgress(-6);
  expect(NewUser.rank).toBe(-8);
  expect(NewUser.progress).toBe(40)
});

test('User ranked -8 completes an activity ranked -5 they will receive 90 progress', () => {
  const NewUser = new User();
  NewUser.incProgress(-5);
  expect(NewUser.rank).toBe(-8);
  expect(NewUser.progress).toBe(90)
});

test('User ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank', () => {
  const NewUser = new User();
  NewUser.incProgress(-4);
  expect(NewUser.rank).toBe(-7);
  expect(NewUser.progress).toBe(60)
});

test('User ranked -1 completes an activity ranked 1 they will receive 10 progress', () => {
  const NewUser = new User();
  NewUser.rank = -1;
  NewUser.incProgress(1);
  expect(NewUser.rank).toBe(1);
  expect(NewUser.progress).toBe(10);
});

test('Completing an activity that is ranked one ranking lower than the users will be worth 1 point', () => {
  const NewUser = new User();
  NewUser.rank = -1;
  NewUser.incProgress(-2);
  expect(NewUser.rank).toBe(-1);
  expect(NewUser.progress).toBe(1);
});

test('Any activities completed that are ranking 2 levels or more lower than the users ranking will be ignored', () => {
  const NewUser = new User();
  NewUser.rank = -1;
  NewUser.incProgress(-3);
  expect(NewUser.rank).toBe(-1);
  expect(NewUser.progress).toBe(0);
});

