const isPrime = (n) =>
{
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

// Function will check whether number is Emirp or not
export const checkEmirp = (n) =>
{
    // Check if n is prime
    if (isPrime(n) === false)
        return false;

    // Find reverse of n
    var rev = 0;
    while (n !== 0) {
        var d = n % 10;
        rev = rev * 10 + d;
        n = parseInt(n/10);
    }
    // If both Original and Reverse are Prime,
    // then it is an Emirp number
    return isPrime(rev);
}