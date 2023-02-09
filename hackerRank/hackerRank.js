// /* Solve Me First
// Complete the function solveMeFirst to compute the sum of two ints.
// Ex: a = 7, b = 3; return 10 */
// function solveMeFirst(a,b) {
//     return a + b;
// };

// /* Simple Array Sum
// Given an arr of ints, find sum of its elements
// Ex: [1,2,3] -> 1+2+3=6 -> return 6 */
// function sumElements(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };
// //OR use forEach
// function sumElements2(arr) {
//     let sum = 0;
//     arr.forEach(element => sum += element);
//     return sum;
// };

// /* Compare the Triplets
// Find comparison points between triplet a & b by comparing a[0] w/ b[0],
// a[1] w/ b[1], a[2] w/ b[2]. If a[i] > b[i], Alice gets 1 pt.
// If a[i] < b[i], Bob gets 1 point. If a[i] = b[i], no pts awarded.
// Return array with Alice's score first & Bob's score second. */
// function compareTriplets(aliceArr, bobArr) {
//     let alicePts = 0;
//     let bobPts = 0;
//     for(let i = 0; i < aliceArr.length; i++) {
//         if(aliceArr[i] > bobArr[i]) {
//             alicePts++;
//         }
//         else if(aliceArr[i] < bobArr[i]) {
//             bobPts++;
//         }
//     }
//     return [alicePts, bobPts];
// };
// //OR use forEach and nested ternary operator
// function compareTriplets2(aliceArr, bobArr) {
//     let alicePts = 0;
//     let bobPts = 0;
//     aliceArr.forEach((element, i) => {
//         element > bobArr[i] ? alicePts++ :
//         element < bobArr[i] ? bobPts++ : ""
//     })
//     return [alicePts, bobPts];
// };

// /* A Very Big Sum
// Calculate and print sum of elements in an array, keeping in mind that ints
// may be very large. */
// function bigSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };
// //OR use forEach
// function bigSum2(arr) {
//     let sum = 0;
//     arr.forEach(element => sum += element);
//     return sum;
// };

// /* Plus Minus
// Given arr of ints, calculate ratios of elements which are positive, negative, and 0.
// Print decimal value of each fraction on new line with 6 places after decimal.
// Ex: arr = [1,1,0,-1,-1] Return: 0.400000, 0.400000, 0.200000 */
// function plusMinus(arr) {
//     let ratios = [];
//     let positive = 0;
//     let negative = 0;
//     let zero = 0;
//     arr.forEach(i => { //forEach - see below for notes
//         if(i > 0) {
//             positive++;
//         }
//         else if(i < 0) {
//             negative++;
//         }
//         else {
//             zero++;
//         }
//     })
//     ratios.push(parseFloat(positive / arr.length).toFixed(6), 
//         parseFloat(negative / arr.length).toFixed(6), 
//         parseFloat(zero / arr.length).toFixed(6));
//     ratios.forEach(element => console.log(element)); //arrow function - see below for notes
// };

// /* forEach: calls function for each element in array
// arrow function: allows for shorter function syntax, only works if function has 1 statement
//     Ex: hello = function() {
//         return "Hello World!";
//     };
//     w/ arrow function becomes
//     hello = () => "Hello World!"; */

// /* Staircase
// Create staircase of size n = 4 using # symbols and spaces. Last line is not preceded by spaces. */
// function staircase(n) {
//     for(let i = 0; i < n; i++) {
//         let step = '';
//         for(let j = n-1; j >= 0; j--) {
//             step += (j >= i+1) ? ' ' : '#';
//         }
//     console.log(step);
//     }
// };

// /* Mini-Max Sum
// Given 5 positive ints, find min and max vals that can be calculated by summing 4 of the ints.
// Then print respective min and max vals as single line of 2 space-separated long ints.
// Ex: arr = [1,3,5,7,9]; min sum is 1+3+5+7=16, max sum is 3+5+7+9=24. Function returns 16 24 */
// function miniMaxSum(arr) {
//     arr.sort((a,b) => a-b); //ensures that arr is always in ascending order
//     let min = arr[0] + arr[1] + arr[2] + arr[3];
//     let max = arr[1] + arr[2] + arr[3] + arr[4];
//     console.log(min + ' ' + max);
// };

// /* Birthday Cake Candles
// Cake will have one candle for each year of child's age.
// Child can only blow out tallest candles. Count how many are tallest.
// Ex: candles = [4,4,1,3]; Max height candles are 4 unites high. There are 2 of them, so return 2. */
// function birthdayCakeCandles(candles) {
//     candles.sort((a,b) => b-a); //ensures that candles arr is in descending order
//     let count = 1;
//     for(let i = 0; i < candles.length; i++) {
//         if(candles[i] == candles[i+1]) {
//             count++;
//         }
//     }
//     return count;
// };
// //OR solution that HackerRank accepted:
// function birthdayCakeCandles2(candles) {
//     let max = Math.max(...candles);
//     let count = 0;
//     for(let i = 0; i < candles.length; i++) {
//         if(candles[i] === max) {
//             count++;
//         }
//     }
//     return count;
// };

// /* Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Example: s = '12:01:00AM' returns '00:01:00' */
// function timeConversion(time12) {
//     if(time12.includes('PM')) {
//         let newTime = time12.replace(/PM/, ''); //regex - replace 2+ characters
//         let hour = parseInt(newTime.substring(0,2)); //extract substring from text from position 0 to position 2
//         if(hour != 12) {
//             hour += 12;
//         }
//         return hour + newTime.substring(2);
//     }
//     if(time12.includes('AM')) {
//         let newTime = time12.replace(/AM/, '');
//         let hour = newTime.substring(0,2);
//         if(hour == 12) {
//             hour = '00';
//         }
//         return hour + newTime.substring(2);
//     }
// };

/* Grading Students
Grade range is 0-100 (inclusive), grade < 40 = F. Round according to rules:
    round to nearest mult of 5 if difference between grade & next mult of 5 is < 3
    if difference between grade & next mult of 5 > 3, do not round
    do not round if grade < 38
Given value of grade, write code to automate rounding process */
function gradingStudents(grade) {
    let difference = 0;
    let mult5 = parseInt(grade);
    while(mult5 %5 !=0) {
        mult5++;
        difference++;
    }
    if(grade >= 38 && grade %5 != 0 && difference < 3) {
         grade = parseInt(Math.round(grade/5) * 5);
    }
    return grade;
}
//The above works for single grade input
//Below works if array of grades is input
function gradingStudents(grades) {
    let roundedGrades = [];
    for(let grade of grades) {
        let difference = 0;
        let mult5 = parseInt(grade);
        while(mult5 %5 !=0) {
            mult5++;
            difference++;
        }
        if(grade >= 38 && grade %5 != 0 && difference < 3) {
            roundedGrades.push(Math.round(grade/5) * 5);
        }
        else {
            roundedGrades.push(grade);
        }
    }
    return roundedGrades;
};

/* Sales by Match
Given arr of ints representing color of each sock, determine how many pairs of socks with matching colors
there are. */
function salesByMatch(n,arr) {
    let hashmap = {};
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        hashmap[arr[i]] ? hashmap[arr[i]]++ : hashmap[arr[i]] = 1
    }
    for(let key in hashmap) {
        count += Math.floor(hashmap[key] / 2)
    }
    return count;
};

/* Counting Sort 1
Create an int arr whose index range covers the entire range of values in arr to sort. 
Each time a value occurs in the original arr, increment the counter at that index. 
At the end, run through your counting arr, printing the val of each non-zero valued index that num of times.
Ex: arr = [1,1,3,2,1]; all vals are in range [0...3] so create arr of 0's, result = [0,0,0,0] 
Results of each iteration:
i	arr[i]	result
0	1	[0, 1, 0, 0]
1	1	[0, 2, 0, 0]
2	3	[0, 2, 0, 1]
3	2	[0, 2, 1, 1]
4	1	[0, 3, 1, 1]
Frequency array is [0,3,1,1]. These vals can be used to create the sorted arr as well: [1,1,1,2,3] */
function countingSort1(arr){
    let countArr = Array(100).fill(0);
    arr.forEach(element => {countArr[element] = countArr[element] + 1});
    return countArr;
};
