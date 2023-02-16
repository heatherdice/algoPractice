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
If there is no common prefix, return an empty string. */
function longestCommonPrefix(arr) {
    let prefix = '';                                //set prefix to empty string
    let i = 0;                                      //i = current index of char in str
    while(i >= 0) {                                  //iterate through chars in str
        for(let j = 0; j < arr.length - 1; j++) {   //iterate through length of array, stop before end
            if() {               //if letter1 & letter2 are the same, proceed to next step
                if(j === arr.length - 2) {          /* if j = 2nd to last index in arr,
                                                    then all previous chars at this index of i
                                                    were passed in the above conditional; we know that 
                                                    this char is the same for all str in arr */                    
                    prefix += letter1;         //add letter1 to prefix str
                }
            }
            else {                                  //if letter1 & letter2 are not the same,
                return prefix;                      //return prefix str
            }
        }
        i++;                                        //increment current index of char in str
    }
};

/* LeetCode #20: Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid. An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type. */
function isValid(s) {
    let pairs = {'(':')', '[':']', '{':'}'}
    for(let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        let pairKey = pairs[]
        if()
    }
};