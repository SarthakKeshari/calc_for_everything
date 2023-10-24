export const checkAbundant = (n) => {
    // To store the sum of divisors
    let sum = 0;
    // Loop through the numbers [1,n-1]
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    // A number n is said to be Abundant Number if
    // sum of all the proper divisors of the number
    // is greater than the value of the number n.
    if (sum > n) {
        return true;
    }
    else {
        return false;
    }
}