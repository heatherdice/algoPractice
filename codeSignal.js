/* add
Write a function that returns the sum of two numbers. */
function solution(param1, param2) {
    return param1 + param2;
};

/* centuryFromYear
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc. */
function solution(year) {
    return Math.ceil(year/100);
};

/* checkPalindrome
Given the string, check if it is a palindrome. */
function solution(inputString) {
    for(let i = 0; i < inputString.length / 2; i++) {
        if(inputString[i] != inputString[inputString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

/* adjascentElementsProduct
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

/* shapeArea
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

/* Make Array Consecutive 2
Arrange statues from smallest to largest so that each statue will be bigger than the previous one by exactly 1.
May need additional statues to accomplish this. Determine min num of additional statues needed. */
function makeArrConsecutive(statues) { // statues = arr of +ints
    //sort statues arr in ascending order
    statues.sort(function(a,b){return a - b});
    // placeholder variable to be returned
    let count = 0;
    //iterate through sorted arr
    for(let i = 0; i < statues.length-1; i++) {
        if(statues[i] - statues[i+1] != -1) {
            count += statues[i+1] - statues[i] - 1;
        }
    }
    return count;
}
console.log(makeArrConsecutive([6,2,3,8]))