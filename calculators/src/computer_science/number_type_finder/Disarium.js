
export const checkDisarium = (num) => {

    let n = num;
    let len = n.toString().length;
    let sum = 0;
    while (n > 0) {
        sum += ((n % 10) **len);
        n = (n/10) >> 0;
        len--;
    }
    return num === sum;
}
