export const checkMagic = (n) => {
    var sum = 0;
    // Note that the loop continues
    // if n is 0 and sum is non-zero.
    // It stops when n becomes 0 and sum becomes single digit.
    while (n > 0 || sum > 9) {
        if (n === 0) {
            n = sum;
            sum = 0;
        }
        sum = sum + (n % 10);
        n = (n / 10) >> 0;
    }

    // Return true if sum becomes 1.
    return sum === 1;
}