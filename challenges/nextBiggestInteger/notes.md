Link: https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

This is a regex problem!

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
414 ==> 441
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
-1 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

This is a problem best resolved with regex!  EDIT: it is most defineately not!

Solved with 2 different algorithms but feel like there is a better way to do it. Just need to to test for first algothrim based on sort and, if test fails, then run the second algorithm based on
associative array.

random comments:
// Swapping approach: from the right, swap lower digit with higher digit appended to the right
  // and keep swapping/appending until the next higher digit is found
  // 19633221         121
  // 19633212         112
  // 19633122         211
  // 19631223
  // 19612233
  // 19122336
  // 11223369 -> no more swapping possible
  // 12123369 -> work from left to right to find the next highest digit and swap it
  // 21123369 -> swap lower digit with higher digit, do until greater than original number
  