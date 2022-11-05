// Write a function that returns an array with all numbers between 1 & 255
function numList() {
    let arr = [];
    for(let x = 1; x < 256; x++) {
        arr.push(x);
    }
    return arr;
};

// Write a function that would get the sum of all even numbers from 1 to 1000
function sumEvenNums() {
    let sum = 0;
    for(let i = 0; i < 1001; i++) {
        if(i %2 === 0) {
            sum += i;
        }
    }
    return sum;
};

// Write a function that returns the sum of all odd numbers from 1 to 5000
function sumOddNums() {
    let sum = 0;
    for(let i = 0; i < 5001; i++) {
        if(i %2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

// Write a function that returns the sum of all values within an array
function sumArrNums(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
