export const checkTaxicab = (limit) => {
    const taxicabNumbers = ["2", "1729", "87539319", "6963472309248", "48988659276962496", "24153319581254312065344"];
    const numberString = limit.toString();
    for (let i = 0; i < taxicabNumbers.length; i++) {
      if (numberString === taxicabNumbers[i]) {
        return true;
      }
    }
    return false;
}