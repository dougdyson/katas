# From: 
(codewar: )[https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript]

## Adding Big Numbers
    function add(a, b) {
      return (Number(a) + Number(b)).toString(); // Fix me!
    }


    describe("Add two numbers", function(){
      it("should pass basic tests", function() {
        Test.assertEquals(add("1", "1"), "2");
        Test.assertEquals(add("123", "456"), "579");
        Test.assertEquals(add("888", "222"), "1110");
        Test.assertEquals(add("1372", "69"), "1441");
        Test.assertEquals(add("12", "456"), "468");
        Test.assertEquals(add("101", "100"), "201");
        Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
      });
    });

## Requirements
- The input numbers are big.
- The input is a string of only digits
- The numbers are positives

## Notes
Although I bumbled around a bit getting back into the flow, this kata is too dated to be useful as it uses an older version of JS node, where the solution is more complicated than it needs to be.

In the spirit of the kata, I'm going to solve it by writing the BigInt() function from scratch.

## Version 1
Far too complicated. It feels like I forgot everything about writing good code!

The below code is another, far superior solution:

    function add(a, b) {
      var res = '', c = 0
      a = a.split('')
      b = b.split('')
      while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
      }
      return res
    }

### Version 1 - Lessons relearned
#### **reduce() vs while()**
I was determined to use reduceRights and not use a while loop, thinking that a bug in a while loop can create an infinite loop. But I was wrong and just ended up spreading the other conditions out into new code. In this instance, pop was a better solution than reduceRight.

#### **Single condition vs multiple conditions in loop**
I was determined to be as explicit as possible, thinking there would be less chance of bugs with less conditions to process. However, as I have learned before, this can make the code less readable and more difficult to debug.

#### **modulo carry**
Copilot suggested using modulo to handle the carry. I was intrigued by this idea but pushed ahead with my own solution. Modulo is a much better solution for managing the carry.

#### **Too concerned with performance**
I tried to keep the loop as performant as possible and only loop as much as necessary, using string manipulation to handle remaining digits in the larger number. This is a good idea, but I was too concerned with performance and had to introduce more code that really wasn't necessary. Should only write code that is necessary and then optimize for performance if necessary.

#### **Variable declarations spread out**
Running the code through ChatGPT for suggestion revealed that I had spread out the variable declarations. This is a good lesson to remember, to keep variable declarations together.

### **Takeaways**
- consolidate and centralize logic, if gets too complicated, break it out into a function, potentially in an external file
- keep variable declarations together
- too many intermediate variables is a sign that the code is too complicated
- don't avoid using variable-controlled loops (i.e while)
- learned that ~~ is a converting strings to numbers shortcut for Math.floor() or Number()

### Version 2
Am going to do a rewrite and use these lessons learned