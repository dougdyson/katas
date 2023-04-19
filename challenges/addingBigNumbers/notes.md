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
The input numbers are big.
The input is a string of only digits
The numbers are positives

## Notes
Although I bumbled around a bit getting back into the flow, this kata is too dated to be useful as it uses an older version of JS node, where the solution is more complicated than it needs to be.  I'm going to skip this one, it was super easy to solve in my current version of node 16.16.0