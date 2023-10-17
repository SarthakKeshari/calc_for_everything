export const checkHarshad = (num) => {
    const sumOfDigits = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    return num % sumOfDigits === 0;
  };