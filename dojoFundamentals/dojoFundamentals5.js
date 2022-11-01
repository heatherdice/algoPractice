/* Sigma
Implement function sigma(num) that, given a number, returns
the sum of all positive ints up to number (inclusive).
Ex: sigma(3) = 6 (or 1+2+3). sigma(5) = 15 (or 1+2+3+4+5) */
function sigma(num) {
    let sum = 0;
    while(num > 0) {
        sum += num;
        num--;
    }
    return sum;
};

/* Factorial
Write a function factorial(num) that, given a number, returns
the product of all positive integers from 1 up to number (inclusive).
Ex: factorial(3) = 6 (or 1*2*3). factorial(5) = 120 (or 1*2*3*4*5) */
function factorial(num) {
    let product = 1;
    while(num > 0) {
        product *= num;
        num--;
    }
    return product;
};