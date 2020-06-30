function reverseBits (n) {

  
  let bits = (n).toString(2);
  
   let answer = parseInt(bits.split('').reverse().join(''),2);

   return answer
  
  
  
}
