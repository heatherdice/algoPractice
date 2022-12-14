/* Countdown
Create a function that accepts a number as an input.
Return a new array that counts down by one, from the number
(as array's "zeroeth" element) down to 0 (as the last element). */
function countdown(int) {
    let arr = [];
    while(int >= 0) {
        arr.push(int);
        int--;
    }
    return arr;
};

/* Print and Return
Your function will receive an array with two numbers.
Print the first value, and return the second. */
function printAndReturn(arr2) {
    console.log(arr2[0]);
    return arr2[1];
};

/* First Plus Length
Given an array, return the sum of the first value in the array,
plus the array's length. What happens if the array's first value is not a number,
but a string or a boolean? */
function firstPlusLength(arr) {
    return arr[0] + arr.length;
};
//OR use arrow function
let firstPlusLength2 = arr => arr[0] + arr.length;

/*If first val is str, response is string concat (ex: this5)
If first val is false, result is length; false = binary result of 0
If first val is true, result is length + 1; true = binary result of 1 */

/* Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value.
Return how many values this is. */
let oddArr = [1,3,5,7,9,13];
function greaterThanSecond(oddArr) {
    let result = 0;
    for(let i = 0; i < oddArr.length; i++) {
        if(oddArr[i] > oddArr[1]) {
            console.log(oddArr[i]);
            result++;
        }
    }
    return result;
};
//OR use for-of (see below for notes)
function greaterThanSecond2(oddArr) {
    let result = 0;
    for(let i of oddArr) {
        if(i > oddArr[1]) {
            console.log(i);
            result++;
        }
    }
    return result;
};

/* This Length, That Value
Given two numbers, return array of length num1 with each value num2.
Print "Jinx!" if they are the same. */
function lengthValue(num1, num2) {
    let solutionArr = [];
    if(num1 === num2) {
        console.log("Jinx!");
    }
    for(let i = 0; i < num1; i++) {
        solutionArr.push(num2);
    }
    return solutionArr;
};


/* Fit the First Value
Given an array, if value at [0] is greater than arr.length, print "Too big!"
If value at [0] is less than arr.length, print "Too small."
Otherwise, print "Just right!" */
function fitFirstValue(arr) {
    let response;
    if(arr[0] > arr.length) {
        response = "Too big!"
    }
    else if(arr[0] < arr.length) {
        response = "Too small.";
    }
    else {
        response = "Just right!";
    }
    return response;
};
//OR use ternary operator
function fitFirstValue2(arr) {
    return arr[0] > arr.length ? "Too big!"
        : arr[0] < arr.length ? "Too small."
        : "Just right!";
};

/* Fahrenheit to Celsius
Create a function that accepts a number of degrees in F and returns the equivalent temp in C.
F = (9/5 * C) + 32. */
function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5/9;
};
//OR use arrow function
let fahrenheitToCelsius2 = fDegrees => (fDegrees - 32) * 5/9;

/* Celsius to Fahrenheit
Create a function that accepts a number of degrees in C and returns the equivalent temp in F.
C = F * 1.8 + 32 */
function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 1.8 + 32;
};
//OR use arrow function
let celsiusToFahrenheit2 = cDegrees => cDegrees * 1.8 + 32;

/* learned a thing! notes below:
for-of loop:
    syntax:
    for(variable of iterable) {code to be executed}
    goes through every element in order; cannot modify iterable */