//How would you return the vowels in a string?
function findVowels(str) {
    let lowerString = str.toLowerCase();
    let vowels = [];
    for(let i = 0; i < lowerString.length; i++) {
        let letter = lowerString[i];
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            vowels.push(letter);
        }
    }
    return vowels;
};
//OR use .includes(), for-of
const vowels = ['a','e','i','o','u']
function findVowels2(str) {
    let lowerString = str.toLowerCase();
    let stringVowels = [];
    for(i of lowerString) {
        if(vowels.includes(i)) {
            stringVowels.push(i);
        }
    }
    return stringVowels;
};

/* Password detection system detects password as *similar* if num of vowels = num of consonants.
Passwords consist of lowercase English characters only. Vowels are a, e, i, o, u. Password length is even.
To check strength & hackability, some manipulations can be made to password.
In one operation, any char of the str can either be incremented or decremented.
Ex: f can be incremented to g or decremented to e.
a cannot be decremented and z cannot be incremented.
Find minimum num of operations in which password can be made *similar*.
Ex: consider password = "hack." h can be changed to i in 1 operation. resultant str is "iack"
which has 2 vowels (i & a) & 2 consonants (c & k). Hence, str is similar.
Minimum num of operations required to make str similar is 1. Return 1. */
