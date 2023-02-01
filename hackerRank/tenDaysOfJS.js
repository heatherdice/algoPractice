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

