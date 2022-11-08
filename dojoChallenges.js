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
        if(i %2 != 0) {
            oddNums.push(i);
        }
    }
    return oddNums;
};
