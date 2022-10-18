// /* Biggie Size
// Given an arr, write a function that changes all positive nums in arr to "big."
// Ex: makeItBig([-1,3,5,-5]) returns [-1,'big','big',-5] */
// function makeItBig(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             arr[i] = "big";
//         }
//     }
//     return arr;
// };

// /* Print Low, Return High
// Create a function that takes an arr of nums.
// Function should print lowest val in arr and return highest val in arr. */
// function printLoReturnHi(arr) {
//     console.log(Math.min(...arr));
//     return Math.max(...arr);
// };
// //OR
// function printLoReturnHi2(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//         else if(arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log(min);
//     return max;
// };

// /* Print One, Return Another
// Build a function that takes an arr of nums.
// Function should print the second-to-last val in arr,
// and return first odd val in arr. */
// function printReturn(arr) {
//     console.log(arr.at(-2));
//     for(let i = 0; i < arr.length; i++) {
//         if(i %2 != 0) {
//             return arr[i];
//         }
//     }
// };

// /* Double Vision
// Given an arr, create a function to return a new arr where
// each val in the original has been doubled.
// Calling double([1,2,3]) should return [2,4,6] without changing original. */
// function double(arr) {
//     let doubleArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         doubleArr.push(arr[i] * 2);
//     }
//     return doubleArr;
// };
// console.log(double([1,2,3]));

// /* Count Positives
// Given an arr of nums, create a function to replace the last val with num of + vals.
// Ex: countPositives([-1,1,1,1]) changes arr to [-1,1,1,3]. */
// function countPositives(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             count++;
//         }
//     }
//     arr[arr.length - 1] = count;
//     return arr;
// };

// /* Evens and Odds
// Create a function that accepts an arr. 
// Every time that arr has 3 odd values in a row, print "That's odd!"
// Every time the arr has 3 evens in a row, print "Even more so!" */
// function evensAndOdds(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] %2 != 0 && arr[i+1] %2 != 0 && arr[i+2] %2 != 0) {
//             console.log("That's odd!");
//         }
//         if(arr[i] %2 == 0 && arr[i+1] %2 == 0 && arr[i+2] %2 == 0) {
//             console.log("Even more so!");
//         }
//     }
// };

// /* Increment the Seconds
// Given arr, add 1 to odd elements, console.log all values, and return arr. */
// function incrementSeconds(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] %2 != 0) {
//             arr[i]++;
//         }
//         console.log(arr[i]);
//     }
//     return arr;
// };

// /* Previous Lengths
// Given an arr containing strings, replace each str with a num.
// Num = length of str at previous arr index. Return arr. */
// function previousLengths(arr) {
//     for(let i = arr.length - 1; i > 0; i--) {
//         let str = String(arr[i-1]);
//         arr[i] = str.length;
//     }
//     arr[0] = 0;
//     return arr;
// };

// /* Add Seven to Most
// Build function that, given an arr, returns new arr with all values 
// except first, adding 7 to each. */
// function add7(arr) {
//     arr.shift();
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 7;
//     }
//     return arr;
// };

/* Reverse Array
Given an arr, write a function to reverse its values.
Ex: reverse([3,1,6,4,2]) returns [2,4,6,1,3] */
function reverse(arr) {

};

/* Outlook: Negative
Given an arr, create and return a new one 
containing all vals of previous arr, but negative.
Do not simply multiply by -1.
Ex: given [1,-3,5] return [-1,-3,-5] */
function negative(arr) {

};

/* Always Hungry
Given an arr, print "yummy" each time val = "food"
If no arr vals are "food" print "I'm hungry" once. */
function alwaysHungry(arr) {

};

/* Swap Toward the Center
Given arr, swap first and last, third and third-to-last, etc.
Ex: [true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]
Ex: [1,2,3,4,5,6] becomes [6,2,4,3,5,1] */
function swapToCenter(arr) {

};

/* Scale the Array
Given array arr and number num, multiply each arr value by num.
Return the changed arr. */
function scaleArray(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
};