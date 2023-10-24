// function to check if number is fascinating or not
export const checkFascinating = (num) => {

    // frequency count array using 1 indexing
    let freq = new Array(10);
    for (let i = 0; i < freq.length; i++) {
        freq[i] = 0;
    }

    // obtaining the resultant number using string concatenation
    let val = "" + num + num * 2 + num * 3;

    // Traversing the string character //by character
    for (let i = 0; i < val.length; i++) {

        // gives integer value of //a character digit
        let digit = val[i].charCodeAt(0) - '0'.charCodeAt(0);

        // To check if any digit has appeared multiple times
        if (freq[digit] > 0 && digit !== 0)
            return false;
        else
            freq[digit]++;
    }

    // Traversing through freq array to check if any digit was missing
    for (let i = 1; i < freq.length; i++) {
        if (freq[i] === 0)
            return false;
    }

    return true;
}


