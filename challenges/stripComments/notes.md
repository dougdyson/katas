# Summary
A few thoughts on this kata: [https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript](stripComments)


## Takeaways
This kata is a great example of unclear requirements and incomplete existing tests:
* looks like a single test in the provided test suite, so no confidence
* existing solutions provide little insight as they only seem to work on the single test case; not the requirements
* as a developer, would have to determine the risk and cost of addressing this technical debt and whether to invest any more time in it.
* going to make a quad square diagram for this: low to critical impact, low to high cost of addressing

## Requirements
* provided written requirements quality was low
* trimming of whitespace only visible in provided example tests

## Tests
* seemed like only one test in the provided test suite
* my passing code failed the corresponding test in my own test suite
* not going to reconcile difference in tests and going with the successful code as I understand the logic and provided requirements are vague (AKA want to move on!)

## Solution
* wasn't sure if the best solution was to parse an array or a string, either via string or regex. Instinct was to start with regex, as it is the most terse approach, but am not fluent enough
* once solved, site provided examples of other, more terse solutions - will review and refactor my own (see below)

## To Do
[in progress] review other solutions and refactor for terseness

## Other Solutions
Here are some other, terser solutions to review and incorporate in a refactor:

```javascript
const solution = (input, markers) => input.replace( new RegExp(" [" + markers.join(',') + "].+", "gi"), '' );

function solution(input, markers) {
  return input.replace(/(\s\W\w+).*|(\s\W\s?\w+\s?\w+)/g, "");
};
```

Both of the above failed my tests

