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

};
