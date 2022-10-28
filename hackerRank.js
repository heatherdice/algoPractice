/* Solve Me First
Complete the function solveMeFirst to compute the sum of two ints.
Ex: a = 7, b = 3; return 10 */
function solveMeFirst(a,b) {
    return a + b;
};

/* Simple Array Sum
Given an arr of ints, find sum of its elements
Ex: [1,2,3] -> 1+2+3=6 -> return 6 */
function sumElements(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
//OR use forEach
function sumElements2(arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum;
};

/* Compare the Triplets
Find comparison points between triplet a & b by comparing a[0] w/ b[0],
a[1] w/ b[1], a[2] w/ b[2]. If a[i] > b[i], Alice gets 1 pt.
If a[i] < b[i], Bob gets 1 point. If a[i] = b[i], no pts awarded.
Return array with Alice's score first & Bob's score second. */
function compareTriplets(aliceArr, bobArr) {
    let alicePts = 0;
    let bobPts = 0;
    for(let i = 0; i < aliceArr.length; i++) {
        if(aliceArr[i] > bobArr[i]) {
            alicePts++;
        }
        else if(aliceArr[i] < bobArr[i]) {
            bobPts++;
        }
    }
    return [alicePts, bobPts];
};
//OR use forEach and nested ternary operator
function compareTriplets2(aliceArr, bobArr) {
    let alicePts = 0;
    let bobPts = 0;
    aliceArr.forEach((element, i) => {
        element > bobArr[i] ? alicePts++ :
        element < bobArr[i] ? bobPts++ : ""
    })
    return [alicePts, bobPts];
};

/* A Very Big Sum
Calculate and print sum of elements in an array, keeping in mind that ints
may be very large. */
function bigSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
//OR use forEach
function bigSum2(arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum;
};

/* Plus Minus
Given arr of ints, calculate ratios of elements which are positive, negative, and 0.
Print decimal value of each fraction on new line with 6 places after decimal.
Ex: arr = [1,1,0,-1,-1] Return: 0.400000, 0.400000, 0.200000 */
function plusMinus(arr) {
    let ratios = [];
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(i => { //forEach - see line 75 for notes
        if(i > 0) {
            positive++;
        }
        else if(i < 0) {
            negative++;
        }
        else {
            zero++;
        }
    })
    ratios.push(parseFloat(positive / arr.length).toFixed(6), 
        parseFloat(negative / arr.length).toFixed(6), 
        parseFloat(zero / arr.length).toFixed(6));
    ratios.forEach(element => console.log(element)); //arrow function - see line 76 for notes
};

/* forEach: calls function for each element in array
arrow function: allows for shorter function syntax, only works if function has 1 statement
    Ex: hello = function() {
        return "Hello World!";
    };
    w/ arrow function becomes
    hello = () => "Hello World!"; */

/* Staircase
Create staircase of size n = 4 using # symbols and spaces. Last line is not preceded by spaces. */
function staircase(n) {
    for(let i = 0; i < n; i++) {
        let step = '';
        for(let j = n-1; j >= 0; j--) {
            step += (j >= i+1) ? ' ' : '#';
        }
    console.log(step);
    }
};

/* Mini-Max Sum
Given 5 positive ints, find min and max vals that can be calculated by summing 4 of the ints.
Then print respective min and max vals as single line of 2 space-separated long ints.
Ex: arr = [1,3,5,7,9]; min sum is 1+3+5+7=16, max sum is 3+5+7+9=24. Function returns 16 24 */
function miniMaxSum(arr) {
    
};

/* Birthday Cake Candles
Cake will have one candle for each year of child's age.
Child can only blow out tallest candles. Count how many are tallest.
Ex: candles = [4,4,1,3]; Max height candles are 4 unites high. There are 2 of them, so return 2. */
function birthdayCakeCandles(candles) {
    
};