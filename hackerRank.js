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
