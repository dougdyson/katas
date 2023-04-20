function add(a, b) {

  const finalSum = [];
  
  const addBigInts = (smallerNum, largerNum) => {
    smallerNum = smallerNum.split('');
    largerNum = largerNum.split('');
    
    const sum = smallerNum.reduceRight((carry, smallNum, i) => {
      (Number(smallNum) + Number(largerNum[i]) > 9) ? carry = 1 : carry = 0;
      // convert each element to a number and add both inputs via the index of the element
      (carry) ? largerNum[i] = Number(largerNum[i]) + carry : largerNum[i] = Number(largerNum[i])
      const acc = Number(smallNum) + Number(largerNum[i]);
      console.log('smallNum:', smallNum, ', largerNum[i]:', largerNum[i] ,', acc:', acc);
      // calculate carry
      
      finalSum.unshift(acc);
      
    }, 0);
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