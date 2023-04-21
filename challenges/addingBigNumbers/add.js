function add(a, b) {

  const finalSum = [];
  
  const addBigInts = (smallerNum, largerNum) => {

    smallerNum = smallerNum.split('');
    largerNum = largerNum.split('');
    let idx = 0;
    let carry = false;
    
    const sum = smallerNum.reduceRight((acc, smallNum, i) => {
      
      // handle carry and add 1
      (carry) && (smallNum = Number(smallNum) + 1);
      
      // determine correct index of largerNum (as it is reversed because of reduceRight)
      idx = largerNum.length - (smallerNum.length - i);
      
      // add the two numbers
      const total = Number(smallNum) + Number(largerNum[idx]);
      
      // determine carry
      (total > 9) ? carry = 1 : carry = 0;

      // pop the last digit of the sum and add to finalSum
      const lastDigit = total.toString().split('').pop();
      finalSum.unshift(lastDigit);
      
    }, 0);

    // make all the remaining digits of the largerNum a number and add carry
    const remainingDigits = Number(largerNum.slice(0, idx).join('')) + Number(carry);
    
    // if there are remaining digits in the largerNum, prepend them to the finalSum
    (remainingDigits > 0) && finalSum.unshift(remainingDigits);

    // return the finalSum as a string
    return finalSum.join('');
  }
  
  // determine which number is smaller and call addBigInts
  return (a.length < b.length) ? addBigInts(a, b) : addBigInts(b, a);

}

module.exports = add