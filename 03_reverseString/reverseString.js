const reverseString = function(string) {
    // Turn the string into an array
    let strArray = string.split("");
    strArray.reverse();
    // Turn the array back into a string
    let newString = strArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
