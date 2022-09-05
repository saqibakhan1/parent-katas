/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(digits) {

 
  sum = 0;

while (digits) {
  sum += digits % 10;
  digits = Math.floor(digits / 10);

}
return sum

}
console.log(sumDigits(12));



module.exports = sumDigits;
