Kata from https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

NOTES:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples:
- scramble('rkqodlw', 'world') ==> True
- scramble('cedewaraaossoqqyt', 'codewars') ==> True
- scramble('katas', 'steak') ==> False

Progress:
- passed simple tests at 15 minutes with copilot solution, which is not performant enough
- spent 10 minutes trying to create a really big test string but it never seems big enough to fail, so am going to try to optimize the solution instead by utlizing sort and compare
- tried regex and matching lengths but edge case!
- used a mapping to an associative arrays and then compared the values of the arrays - 1 hour mark!

REFACTOR:

My solution is a bit verbose and I need to refactor it down. There was a previous solution from someone else that was super tight:

```const scramble = (str1, str2) => str2.split('').every(x => str1.split(x).length >= str2.split(x).length)```

^ going to analyze this and see if I can understand it!

EDIT: split was the key! I was trying to use regex and match but split is much more performant and easier to understand. I also like the use of the .every method to check if all the characters in str2 are in str1 by way of comparing lengths - very clever. I've only been using split to create arrays from '' but using lengths is way more peformant than iterating each character for a match. This probably comes from me wanting code to be as explicit as possible, but that is not always the best approach and sometimes it is more efficient!

