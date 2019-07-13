exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  let factors = [];
  // let primeNumber = function(n) {
  //   if ((factors[0] = 1)) {
  //     primeNumber = factors[0];
  //     return;
  //   }
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      factors.unshift(i);
    }
  }
  console.log(factors);
  let arry2 = [];
  // let findPrime = function(arry) {
  let factors2 = [];

  for (let x = 0; x < n; x++) {
    if (factors[x] % x === 0) {
      factors2.unshift(x);
    }
    console.log(factors2);
    // if (factors2.length === 1) {
    //   primeNumber = factors[x];
    // }
  }
  // };
  // primeNumber(array[0]);
  // };
  return primeNumber;
};
