// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: subLength()
// ---------------------------------------------------------------------------

function subLength(string, singleCharacter) {

// Takes input string and creates array of single characters

    const array = string.split('');

// Counts instances of singleCharacter in array
    
    let counter = 0;
    for (element of array) {
        if (element === singleCharacter) {
        counter++;
        }   
    };

// Returns 0 if array contains more of less than 2 instances of singleCharacter    

    if (counter != 2) {
        return 0;
    }

// Returns the length between the 2 instances of singleCharacter including the 2 instances

    else {
        const indexOfFirst = string.indexOf(singleCharacter);
        const indexOfSecond = string.lastIndexOf(singleCharacter);
        const distance = (indexOfSecond - indexOfFirst) + 1;
        return distance;
    }
}

// Calls subLength function and logs result to console

console.log(subLength('Saturday', 'a'));