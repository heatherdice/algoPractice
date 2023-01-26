/* CodeSignal #1: add
Write a function that returns the sum of two numbers. */
function solution(param1, param2) {
    return param1 + param2;
};

/* CodeSignal #2: centuryFromYear
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc. */
function solution(year) {
    return Math.ceil(year/100);
};

/* CodeSignal #3: checkPalindrome
Given the string, check if it is a palindrome. */
function solution(inputString) {
    for(let i = 0; i < inputString.length / 2; i++) {
        if(inputString[i] != inputString[inputString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

/* CodeSignal #4: adjascentElementsProduct
Given an array of integers, 
find the pair of adjacent elements that has the largest product 
and return that product. */
function adjascentElementsProduct(inputArray) {
    let num = 0;
    for(let i = 0; i < inputArray.length-1; i++) {
        let x = inputArray[i+1];
        let product = inputArray[i] * x;
        if(product > num || i == 0) {
            num = product;
        }
    }
    return num;
};

/* CodeSignal #5: shapeArea
Find the area of a polygon for a given n.
Ex: a 1-interesting polygon is just a square with a side of length 1.
An n-interesting polygon is obtained by taking the n - 1-interesting polygon
and appending 1-interesting polygons to its rim, side by side. (See CodeSignal
for example images.) */
function shapeArea(n) {
    // multiples of 4
    // loop going up n times
    let result = 1;
    if (n === 1) { // === also checks data type, better for debugging
        return result;
    }
    for (let i = 0; i < n; i++) {
        result += i*4;
        console.log("RESULT:",result);
    }
    return result;
};
// n = 2 output = 5; n = 3 output = 13; n = 3 output = 13; n = 4 output = 25
shapeArea(4)