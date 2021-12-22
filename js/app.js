// prime number = can only divide evenly by itself or one. 
// 11/2  =5.5

function checkPrimeNo(num) {
 if (num < 2) {
  return `${num} is not prime number`
 }

 for (let i = 2; i < num; i++) {
  if (num % i === 0) {
   return `${num} is not prime number`
  }
 }

 return `${num} is prime number`;
}

console.log(checkPrimeNo(97))