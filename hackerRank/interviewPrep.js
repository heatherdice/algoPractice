// QUESTIONS IN THIS FILE OBTAINED FROM HACKERRANK INTERVIEW PREP KIT

/* Counting Valleys
Given the sequence of up & down steps during a hike, find & print num of valleys walked through
Variables: steps = num of steps, U = uphill, D = downhill
Details: hikes start & end at sea level, each step up or down represents 1 unit change in altitude
Terms: mountain = sequence of consecutive steps above sea level, starting w/ step up & ending w/ step down;
valley = sequence of consecutive steps below sea level, starting w/ step down from sea level & ending w/ step up */
function countingValleys(steps, path) { // steps = int, path = str
    // set placeholder variables for altitude (to determine if path is above/below sea level) & valleys (for return)
    let altitude = 0;
    let valleys = 0;
    // iterate over path
    for(let i = 0; i < steps; i++) {
        // determine if above or below sea level
        path[i] == "U" ? altitude++ : altitude--;
        console.log("ALTITUDE:", altitude); // checks that altitude is being calculated correctly
        // if just below sea level but returning up to sea level, that is a valley
        if(altitude == -1 && path[i+1] == "U") {
            valleys++;
        }
    }
    return valleys;
}
