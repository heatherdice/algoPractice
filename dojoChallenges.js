// Get 1 to 255: Write a function that returns an array with all numbers between 1 & 255
function numList() {
    let arr = [];
    for(let x = 1; x < 256; x++) {
        arr.push(x);
    }
    return arr;
};

// Get even 1000: Write a function that would get the sum of all even numbers from 1 to 1000
function sumEvenNums() {
    let sum = 0;
    for(let i = 0; i < 1001; i++) {
        if(i %2 === 0) {
            sum += i;
        }
    }
    return sum;
};

// Sum odd 5000: Write a function that returns the sum of all odd numbers from 1 to 5000
function sumOddNums() {
    let sum = 0;
    for(let i = 0; i < 5001; i++) {
        if(i %2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

// Iterate an array: Write a function that returns the sum of all values within an array
function sumArrNums(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// Find max: Given an arr w/ multiple vals, write a function that returns the max num in the arr
function maxVal(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};

// Find average: Given an arr w/ multiple vals, write a function that returns the avg of the vals in the arr
function average(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / (arr.length);
};

// Array odd: Write a function that would return an arr of all the odd nums between 1 to 50
function oddArr(arr) {
    let oddNums = [];
    for(i of arr) {
        if(i %2 !== 0) {
            oddNums.push(i);
        }
    }
    return oddNums;
};

/* Greater than Y: Given val of Y, write a function that takes an arr & returns num of vals > Y.
Example: arr = [1,3,5,7] and Y = 3, function returns 2. */
function greaterThanY(arr, Y) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > Y) {
            count++;
        }
    }
    return count;
};

/* Squares: Given an arr with multiple vals, write a function that replaces each val in the arr
with the product of the original val multiplied by itself. Example: [1,5,10,-2] becomes [1,25,100,4] */
function squares(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
};
//OR use Math.pow
function squares2(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
};

/* Negatives: Given an arr w/ multiple vals, write a function that replaces any negative nums in arr
w/ val of 0. When function is done, arr should contain no negative vals. */
function negatives(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
};

/* Max/Min/Avg: Given an arr with multiple vals, write a function that returns a new arr that only contains
the max, min, and avg vals of the original arr. Example: [1,5,10,-2] will return [10, -2, 3.5] */
function maxMinAvg(arr) {
    let solution = [];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    solution.push(max, min, avg)
    return solution;
};
