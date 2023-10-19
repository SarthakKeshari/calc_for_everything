export const checkKaprekar = (num) => {
    let x = num ** 2;
    x = x.toString();
    const mid = Math.floor((x.length - 1) / 2);
    const leftNum = x.substring(0, mid + 1);
    const rightNum = x.substring(mid + 1, x.length);
    const value = parseInt(leftNum) + parseInt(rightNum);
    return value === num;
  };