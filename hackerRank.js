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
