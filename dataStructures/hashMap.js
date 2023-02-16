// // copied (and translated from Spanish??) from Coding Dojo site
// function HashMap(capacity) {
//     this.capacity = capacity;
//     this.table = [];
// }
// // we use this line to encode a string...
// let myHashCode = myString.hashCode()
// // ...based on this implementation:
// String.prototype.hashCode = function() {
//     let hash = 0;
//     if (this.length == 0) return hash;
//     for (i = 0; i < this.length; i++) {
//         char = this.charCodeAt(i);
//         hash = ((hash<<5)-hash)+char; // need to study << & >> operators more!
//         hash &= hash; //Convert-->32b int
//     }
//     return hash;
// }
// // JS % acts strangely with negatives, and we use it like this:
// function mod(input, div) { 
//     return (input % div + div) % div;
// }
// // ... and we use it this way:
// var myIdx = mod(myHashCode,arrSize);

// hashmap example (basics)
let arr = [5,7,13,2,5,4,13,2,5];
const returnMostFrequentRepeat = (arr) => { // basics of creating map
    // Map arr, return key w/ greatest val
    // Map keys will be numbers, vals will be num of time they appear in the arr
    let arrMap = {};
    let mostFrequent = 0;
    for(let i = 0; i < arr.length; i++) {
        // check if key exists in Map
        if(!arrMap[arr[i]]) { //if there's no key of arr[i], add it to the map and give it a val of 1
            arrMap[arr[i]] = 1;
        }
        else {
            arrMap[arr[i]]++;
        }
        console.log("ARR MAP:", arrMap); //shows process of loop
    }
    for(let key in arrMap) { // basics of iterating through a map
        if(arrMap[key] > mostFrequent) {
            mostFrequent = arrMap[key]; // calling value of each key
        }
    }
    return mostFrequent;
}
console.log(returnMostFrequentRepeat([5,7,13,2,5,4,13,2,5]));