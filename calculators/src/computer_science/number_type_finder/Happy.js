export const checkHappy = (num) => {
    let seen = new Set();

    while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      num = num
        .toString()
        .split("")
        .map((digit) => parseInt(digit) ** 2)
        .reduce((a, b) => a + b, 0);
    }

    return num === 1;
  };