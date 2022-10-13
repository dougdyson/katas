From: https://www.codewars.com/kata/551f23362ff852e2ab000037/javascript

Example set: https://www.codewars.com/kata/551f23362ff852e2ab000037/discuss#5918235980a6997f7b000005

[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20,  4, 82, 47, 65],
[19,  1, 23, 75,  3, 34],
[88,  2, 77, 73,  7, 63, 67],
[99, 65,  4, 28,  6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]

and the correct longest slide down is:

75+64+82+87+82+75+73+28+83+32+91+78+58+73+93 = 1074

# ROUND ONE
Copilot had a solution right from the start which passed the simple test but failed the medium test because the solution only taverses in one direction, when it needs to be able to go back to a previous node if the sum of the current node and the next node is less than the sum of the current node and the previous node's other path.

## Thoughts
Although I could traverse the entire tree, it won't be performant and not likely pass the tests unless I can find a way to proactively prune the tree or know when not to traverse a branch.

Also, it doesn't seem possible to know if a path that traverse the entire tree is path with highest possible value.

## Sorting Idea
Another approach may be sorting, where all the values in each row is a descending sort  stored in an associative array together with the index position in the source tree and then sort by index position in the source tree. In this way, we can at least know the highest value possible, regardless of paths with dead ends, so we can start reducing down the tree until we find the first path that traverse the entire tree.

If the index positions from the source tree do not create a full path and/or there are dead ends in the path, then the path is not valid.

If the path is not valid, compare to the next highest value column in the source tree and repeat until a valid path is found. A compare may be necessary.

