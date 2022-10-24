/* Only Keep the Last Few
Given arr and num X, remove all except the last X elements.
Return arr (changed and shorter). Ex: given ([2,4,6,8,10],3),
change array to [6,8,10] and return it. */
function keepLastFew(arr, x) {
    while(arr.length > x) {
        arr.shift();
    }
    return arr;
};

/* Math Help
Given 2 numbers, M & B in the equation Y = MX+B.
Build function to return X-intercept. (X-intercept is value of X where Y = 0) */


/* Poor Kenny
Out of the last 100 days, there were 10 days with volcanoes, 15 with tsunamis,
20 earthquakes, 25 blizzards, and 30 meteors. If these probabilities continue,
write whatHappensToday() to print a day's outcome. */


/* What Really Happened?
Change whatHappensToday() to create whatReallyHappensToday().
In this new function, test for each disaster independently instead of assuming
exactly one disaster will happen. In other words, with this new function, all five
might occur today - or none. */


/* Soaring IQ
During 14 weeks, student's IQ of 101 rose by .01 on the first day, then went up by
an additional .02 on the 2nd day, then .03 more on the 3rd, etc. all the way until increasing
by .98 on his 98th day. What is his final IQ? */
function iqIncrease(iq, day) {
    for(let i = 1; i < day; i++) {
        iq += i*.01;
    }
    return iq;
};
console.log(iqIncrease(101,98));

/* Letter Grade
Write a function that assigns & prints a letter grade, given an integer representing
a score from 0 to 100. 90+ get A, 80-89 get B, 70-79 get C, 60-69 get D, lower than 60 get F.
Ex: given 88, should log "Score: 88, Grade: B" */
function letterGrade(score) {
    let grade;
    if(score >= 90) {
        grade = 'A';
    }
    else if(score >= 80) {
        grade = 'B';
    }
    else if(score >= 70) {
        grade = 'C';
    }
    else if(score >= 60) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    console.log("Score: " + score, "Grade: " + grade);
};
//OR use ternary operator (see notes below for syntax)
function letterGrade2(score) {
    let grade = score >= 90 ? 'A' : 
                score >= 80 ? 'B' :
                score >= 70 ? 'C' :
                score >= 60 ? 'D' : 'F';
    console.log("Score: " + score, "Grade: " + grade);
};

/* More Accurate Grades
Add - to scores in bottom % of grade, and + to scores in top % of grade.
Ex: Given 88, console.log "Score: 88, Grade: B+" */
let gradeMap2 = ['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
function accurateGrade(score) {
    let index = Math.floor(30 - (score / 3.33));
    let grade = gradeMap2[index >= gradeMap2.length ? gradeMap2.length - 1 : index];
    console.log("Score: " + score, "Grade: " + grade);
};
/* learned a thing! notes:
syntax for ternary operator in JS
condition to test ? value if true : value if false */