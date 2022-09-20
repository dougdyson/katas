Kata from https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

--- passed simple tests at 15 minutes with copilot solution, which is not performant enough
--- spent 10 minutes trying to create a really big test string but it never seems big enough to fail, so am going to try to optimize the solution instead by utlizing sort and compare