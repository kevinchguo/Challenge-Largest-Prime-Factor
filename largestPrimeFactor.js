exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // n will become and stay as the largest prime factor until the while loop ends when x becomes greater than n
  for (let x = 3; x < n; ) {
    if (n % x === 0) {
      n /= x;
      //x will only update IF n % x !== 0
    } else {
      x += 2;
    }
  }

  primeNumber = n;
  return primeNumber;
};
