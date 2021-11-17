link: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

```
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
```

# UPDATE
OK, didn't catch the part about a sequence requiring at least 3 sequential integers! So, I solved the wrong thing! The lesson here is to not write all my own tests when there are existing tests and make sure to include all existing tests in my test suite - even if I need to write simpler tests to start. (They can be skipped or ignored until required.)