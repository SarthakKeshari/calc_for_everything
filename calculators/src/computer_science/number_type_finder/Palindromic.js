export const checkPalindromic = (num) => {
    const numStr = num.toString();
    return numStr === numStr.split("").reverse().join("");
  };