export const checkSmith = (number) => {
  const getDigitSum = (n) => {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  const checkSmith = (num) => {
    const digitSum = getDigitSum(num);

    const getPrimeFactorsSum = (n) => {
      let sum = 0;
      for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
          sum += getDigitSum(i);
          n /= i;
        }
      }
      return sum;
    };

    const primeFactorsSum = getPrimeFactorsSum(num);

    return digitSum === primeFactorsSum;
  };

  return checkSmith(number);
};
