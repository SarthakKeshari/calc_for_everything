export const checkArmstrong = (num) => {
    let value = 0;
    let x = num.toString();
    x = x.split("");
    x.forEach((digit) => {
      value += parseInt(digit) ** x.length;
    });
    return value === num;
  };