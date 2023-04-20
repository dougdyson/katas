function add(a, b) {

  const finalSum = [];
  
  const addBigInts = (smallerNum, largerNum) => {
    
    smallerNum = smallerNum.split('');
    largerNum = largerNum.split('');
    let carry = false;
    
    const sum = smallerNum.reduceRight((acc, smallNum, i) => {
      
      // handle carry and add 1 to smallNum
      (carry) && (smallNum = Number(smallNum) + 1);
      
      const total = Number(smallNum) + Number(largerNum[i]);
      
      // determine carry
      (total > 9) ? carry = true : carry = false;
      console.log('smallNum:', smallNum, ', largerNum[i]:', largerNum[i] ,', total:', total, ', carry:', carry);
      
      const lastDigit = total.toString().split('').pop();
      finalSum.unshift(lastDigit);
      
    }, 0);
    // if carry is true, unshift 1 to the first element of the finalSum array
    (carry) && finalSum.unshift(1);
    console.log('finalSum:', finalSum.join(''));
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