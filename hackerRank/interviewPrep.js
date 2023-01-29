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

/* Jumping on the Clouds
Game w/ consecutively numbered clouds: thunderheads (1) & cumulus (0). Player can jump on any cumulus (0) w/ 
num = cumulus + 1 || num = cumulus + 2. Player must avoid thunderheads (1). Determine min num of jumps it will take
to jump from start to last cloud. Always possible to win. Arr of clouds for each game numbered 0 if safe, 1 if not. */
function jumpingOnClouds(c) { // c = arr of binary ints
    // set placeholder variables for min num of jumps & index
    let minJumps = 0;
    let i = 0;
    // loop through arr until getting to second-to-last index; avoids index out of range err
    while(i < c.length-1) {
        // 2 jumps (jump over 1 or jump over consecutive 0)
        if(c[i+1] >= 0 && i + 2 < c.length && c[i+2] == 0) {
            minJumps++;
            i+=2; // increase index by 2 to skip
        }
        // 1 jump (jump to next consecutive 0)
        else if(c[i+1] == 0) {
            minJumps++;
            i++; // increment i to avoid endless loop
        }
    }
    return minJumps;
}
