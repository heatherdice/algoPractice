/* LeetCode #1: Two Sum
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order */
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                let indices = [i, j];
                return indices;
            }
        }
    }
};

/* LeetCode #9: Palindrome Number
Given an integer x, return true if x is palindrome integer. */
function isPalindrome(x) {
    let y = x.toString();
    const len = y.length;
    for(let i = 0; i < len/2; i++) {
        if(y[i] !== y[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

/* LeetCode #13: Roman to Integer
Given a roman numeral, convert it to an integer. */
function romanToInt(s) {
    let conversion = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let solution = 0;
    for(let i = 0; i < s.length; i++) {
        let current = s[i];
        let currentVal = conversion[current];
        let next = s[i + 1];
        let nextVal = conversion[next];

        if(currentVal >= nextVal || currentVal && !nextVal) {
            solution += currentVal;
        }
        else if(currentVal < nextVal) {
            solution -= currentVal;
        }
    }
    return solution;
};

/* LeetCode #14: Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings
If there is no common prefix, return an empty string.
DID NOT SOLVE THIS ON MY OWN. Solution taken from a posted LeetCode solution. I was stumped so rather than solve on my own,
I decided to find a solution and learn from it. Below is that solution as well as my explanations for why it works. */
function longestCommonPrefix(arr) {
    let i = 1;                              // set i to 1 to start iteration w/ 2nd array element
    let prefix = arr[0];                    // prefix set to 1st element in array; this allows comparison between array elements
    while(i < arr.length) {                 // iterate through array while i is less than the length of the array
        if(!arr[i].startsWith(prefix)) {    // if element in array does not start with first element in array
            prefix = prefix.slice(0,-1);    // remove last letter in prefix (first element in array) and compare again
        }
        else {
            i++;                            // increase i by 1 to move to next element in the array and compare again
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(['flower','flow','flight']));


/* LeetCode #20: Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid. An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type. */
// function isValid(s) {
//     let pairs = {'(':')', '[':']', '{':'}'}
//     for(let i = 0; i < s.length; i++) {
//         let current = s[i];
//         let next = s[i + 1];
//         let pairKey = pairs[]
//         if()
//     }
// };