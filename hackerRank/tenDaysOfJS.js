/* Hello, World!
Write a function that takes a string, parameterVariable. Print that string to the console. */
function greeting(parameterVariable) {
    console.log(parameterVariable);
}

/* Data Types
Use the + operator to: convert secondInteger to int, then sum w/ firstInteger & print result,
convert secondDecimal to float, then sum w/ firstDecimal & print result,
print concatenation of firstString & secondString. */
function performOperation(secondInteger,secondDecimal,secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank';
    console.log(firstInteger+Number(secondInteger)); // shouldn't need Number() method? but HR required it for both
    console.log(firstDecimal+Number(secondDecimal)); // ditto above
    console.log(firstString+' '+secondString); // hackerRank included ' ' in their secondString
}

/* Arithmetic Operations
Write 2 functions to find the area & perimeter of a rectangle. */
function getArea(l,w) {
    return l*w;
}
function getPerimeter(l,w) {
    return 2(l+w);
}

/* Loops
Print each vowl in str "s" on a new line. Then, print each consonant in str "s" on a new line. */
function vowelsAndConsonants(s) { // s = str
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            console.log(s[i]);
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] != "a" && s[i] != "e" && s[i] != "i" && s[i] != "o" && s[i] != "u") {
            console.log(s[i]);
        }
    }
}

/* Functions
Implement a function named factorial that has one parameter: an int, n. It must return the value of n! (i.e., n factorial) */
function factorial(n) {
    let factorial = 1; // set to 1 because setting to 0 would produce 0 as answer every time (n*0=0)
    while(n > 1) { // set to 1 to prevent n*0
        factorial *= n;
        n--; // decrementing to prevent endless loop
    }
    return factorial;
}

/* Let and Const
Declare a const var, PI, and assign it the value Math.PI. Read a num, r, denoting the radius of a circle from stdin. Use PI & r to
calculate area & perimeter of a circle having radius r. Print area as 1st line of output & print perimeter as 2nd line of output. */
function circleDimensions(r) {
    const PI = Math.PI; // Math.PI gives exact pi
    console.log(PI*(Math.pow(r,2))); // area; Math.pow(num,exponent) gives number to the exponent power
    console.log(2*PI*r); // perimeter
}

/* Conditional Statements: If-Else
Function has 1 perameter, score, denoting num of points student earned on exam. Must return letter corresponding to her grade
according to the following rules:  grade = A if 25<score<=30, grade = B if 20<score<=25, grade = C if 15<score<=20, grade = D if
10<score<=15, grade = E if 5<score<=10, grade = F if 0<=score<=5. Function must return val of grade. */
function examGrade(score) {
    let grade;
    if(score > 25 && score <= 30) {
        grade = "A";
    }
    else if(score > 20 && score <= 25) {
        grade = "B";
    }
    else if(score > 15 && score <= 20) {
        grade = "C";
    }
    else if(score > 10 && score <= 15) {
        grade = "D";
    }
    else if(score > 5 && score <= 10) {
        grade = "E";
    }
    else {
        grade = "F";
    }
    return grade;
}

/* Conditional Statements: Switch
The getLetter(s) function has 1 perameter, a string (s) consisting of lowercase English alphabetic letters. Must return A, B, C, or D
depending on the following criteria:
- if 1st char in s is in the set {a,e,i,o,u}, return A
- if 1st char in s is in the set {b,c,d,f,g}, return B
- if 1st char in s is in the set {h,j,k,l,m}, return C
- if 1st char in s is in the set {n,p,q,r,s,t,v,w,x,y,z}, return D */
function getLetter(s) {
    let letter = s[0];
    let A = new Set(['a','e','i','o','u']);
    let B = new Set(['b','c','d','f','g']);
    let C = new Set(['h','j','k','l','m']);
    let D = new Set(['n','p','q','r','s','t','v','w','x','y','z']);
    switch(true) {
        case A.has(letter):
            return "A";
        case B.has(letter):
            return "B";
        case C.has(letter):
            return "C";
        case D.has(letter):
            return "D";
    }
}

/* Arrays
Write a function that returns the second-largest number in an array. */
function secondLargestNum(arr) {
    arr.sort(function(a,b){return b-a});
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            return arr[i+1];
        }
    }
}

/* Try, Catch, and Finally
Try to reverse string s using split, reverse, and join methods. If an exception is thrown, catch it & print the contents of the 
exception's message on a new line. Print s on a new line. If no exception is thrown, this should be the reversed string. If an 
exception is thrown, this should be the original string. */
function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}
