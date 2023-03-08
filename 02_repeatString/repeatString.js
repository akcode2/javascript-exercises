const repeatString = function(string, num) {
    if (num < 0)
    {
        return 'ERROR';
    }
    let newString = "";
    let i = 0;

    while (i < num) {
        newString += string;
        i++;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
