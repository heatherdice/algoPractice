//How would you return the vowels in a string?
function findVowels(str) {
    let lowerString = str.toLowerCase();
    console.log(lowerString);
    let vowels = [];
    for(let i = 0; i < lowerString.length; i++) {
        let letter = lowerString[i];
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            vowels.push(letter);
        }
    }
    return vowels;
};
