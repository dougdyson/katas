const User = require('./userClass.js'); //?

test('Class successfully created with default rank of -8', () => {
  const NewUser = new User(); //?
  expect(NewUser.rank).toBe(-8)
});

test('Class successfully created with default progress of 0', () => {
  const NewUser = new User(); //?
  expect(NewUser.progress).toBe(0)
});

test('A new Rank -8 completes Rank -8 activity for a progress of 3', () => {
  const NewUser = new User();
  NewUser.incProgress(-8) //?
  expect(NewUser.progress).toBe(3)
});

test('A new Rank -8 completes Rank -7 activity for a progress of 10', () => {
  const NewUser = new User();
  NewUser.incProgress(-7) //?
  expect(NewUser.progress).toBe(10)
});

test('A new Rank -8 completes Rank 8 activity for a rank of 7 and progress of 60', () => {
  const NewUser = new User();
  NewUser.incProgress(8) //?
  expect(NewUser.rank).toBe(-7);
  expect(NewUser.progress).toBe(60);
});

test('A new Rank -8 completes 8 Rank 8 activit9es for a rank of 1', () => {
  const NewUser = new User();
  for (let i = 1; i < 9; i++) {
    NewUser.incProgress(8)
  }
  expect(NewUser.rank).toBe(1);
});