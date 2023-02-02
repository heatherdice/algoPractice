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
