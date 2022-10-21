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
    ratios.forEach(element => console.log(element)); //arrow function - see line 75 for notes
};

/* forEach: calls function for each element in array
arrow function: allows for shorter function syntax, only works if function has 1 statement
    Ex: hello = function() {
        return "Hello World!";
    };
    w/ arrow function becomes
    hello = () => "Hello World!";