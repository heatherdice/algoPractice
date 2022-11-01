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

/* Star Art
Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
Write a function drawRightStars(num) that prints 75 chars total. Stars should build from right side.
    Last num chars should be *'s, the other 75 should be spaces.
Write function drawCenteredStars(num) that prints 75 chars total. The *'s should be centered in the 75.
    The middle num chars should be *'s, the rest of the 75 spaces. */
function drawLeftStars(num) {
    let stars = '';
    while(num > 0) {
        stars += '*';
        num--;
    }
    return stars;
};
function drawRightStars(num) {
    let stars = '';
    let spaces = '';
    let otherNum = 75 - num;
    while(otherNum > 0) {
        spaces += ' ';
        otherNum--;
    }
    while(num > 0) {
        stars += '*';
        num--;
    }
    return spaces + stars;
};
function drawCenteredStars(num) {
    let stars = '';
    let spaces = '';
    let otherNum = (75 - num)/2;
    while(otherNum > 0) {
        spaces += ' ';
        otherNum--;
    }
    while(num > 0) {
        stars += '*';
        num--;
    }
    return spaces + stars + spaces;
};
