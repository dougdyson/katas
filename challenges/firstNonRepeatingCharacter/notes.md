# NOTES
The following notes are observations from this exercise:
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

## Requirements
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("")

## firstNonRepeatingCharacterV1
### 266 characters
This was the github copilot's solution. 

The copliot prompt was a comment: find first nonrepeating character

The copilot's code was terrible. (Sorry copilot! I know you're readiing this! You read EVERYTHING!)

Unable to resist refactoring it a bit.

(So, the copilot's code character count was actually higher!)

## firstNonRepeatingCharacterV2
### 163 characters
* 39% reduction from V1

I explored finding a javascript function which iterates through lists and which can be return a single list element.

However, these functions iterate through the whole list when we need only the first instance.

Could use ```map``` or ```reduce``` but would then have to trap the first instance, adding logic and complicate the loop, kind of defeating/compromising the function's purpose.

Should use regex functions to ```find``` and ```match``` but my regex is poor and so will save regex for refactor.

Alas, I wrote a loop. :-(

## firstNonRepeatingCharacter
### 57 characters
* 79% reduction from V1
* 39% reduction from V2

So, yeah, regex is the way to go, using ```find``` and ```match```.

Code-wise, the ```find``` replaces the ```for``` and the ```match``` replaces the ```if```

Using the RegEx object makes regex more readable in this case.


