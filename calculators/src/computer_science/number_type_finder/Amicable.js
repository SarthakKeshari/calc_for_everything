export const checkAmicable = (num) => {
    const x = sumProperDivisors(num);
    if (x !== num) {
      if (sumProperDivisors(x) === num) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  const sumProperDivisors = (num) => {
    if (num <= 1) {
      return 0;
    }

    let sum = 1;
    const sqrtNum = Math.sqrt(num);

    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        sum += i;
        const divisor = num / i;
        if (divisor !== i) {
          sum += divisor;
        }
      }
    }

    return sum;
  };