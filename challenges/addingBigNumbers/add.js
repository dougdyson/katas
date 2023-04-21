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
      
      // determine correct index of largerNum
      idx = largerNum.length - (smallerNum.length - i);
      
      const total = Number(smallNum) + Number(largerNum[idx]);
      
      // determine carry
      (total > 9) ? carry = 1 : carry = 0;

      console.log('smallNum:', smallNum, ', largerNum[idx]:', largerNum[idx] ,', total:', total, ', carry:', carry);
      
      const lastDigit = total.toString().split('').pop();
      finalSum.unshift(lastDigit);
      
    }, 0);
    
    // // if carry is true, add 1 as the first element of the finalSum array
    // (carry) && finalSum.unshift(1);

    // make all the remaining digits of the largerNum a number add carry
    const remainingDigits = Number(largerNum.slice(0, idx)) + Number(carry)
    console.log('remainingDigits:', remainingDigits);

    (remainingDigits) && finalSum.unshift(remainingDigits);

    return finalSum.join('');
  }
  
  // determine which number is smaller
  if (a.length < b.length) {
    return addBigInts(a, b);
  } else {
    return addBigInts(b, a);
  }

}

module.exports = add