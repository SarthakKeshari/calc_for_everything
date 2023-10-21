export const checkAutomorphic = (num) => {
    let x = num ** 2;
    x = x.toString();
    x = x.substring(x.length - num.toString().length, x.length);
    return parseInt(x) === num;
  };
