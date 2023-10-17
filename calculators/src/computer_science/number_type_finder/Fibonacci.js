export const checkFibonacci = (num) => {
    if (num < 0) {
      return false;
    }
    if(num === 0){
      return true;
    }
    let a = 0;
    let b = 1;
    while (b < num) {
      const temp = b;
      b += a;
      a = temp;
    }

    return b === num;
  };