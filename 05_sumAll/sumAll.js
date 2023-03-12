const sumAll = function(num1, num2) {
    
    if (num1 < 0 || num2 < 0) {
        console.log("Non-positive number");
        return "ERROR";
    }
    else if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        console.log("One or more non-number arguments");
        return "ERROR";
    }

    let finalSum = 0;
    const firstInt = Math.min(num1, num2);
    const secondInt = Math.max(num1, num2);

    // Assume firstInt < secondInt
    for (let i = firstInt; i < secondInt + 1; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
