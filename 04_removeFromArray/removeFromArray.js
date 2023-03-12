const removeFromArray = function(array, ...args) {
    
    // My first solution
    // let length = args.length;
    // for (let i = 0; i < length; i++) {
    //     let argToFind = args[i];
    //     // Arrow functions have implicit return. If element
    //     // strictly equals argToFind, return truthy value.
    //     let finderFunction = (element) => element === argToFind;
    //     let foundIndex = array.findIndex(finderFunction);
    //     // If arg is not in the array, go to the next one
    //     if (foundIndex === -1) {
    //         continue;
    //     }
    //     // Remove 1 element at the foundIndex position
    //     array.splice(foundIndex, 1);
    // }
    
    // return array;
    
    // Another solution pushing elements into a new array
    // const newArray = [];

    // array.forEach((element) => {
    //     // Push any element that doesn't need to be removed
    //     // into the new array
    //     if (!args.includes(element)) {
    //         newArray.push(element);
    //     };
    // });

    // return newArray;

    // Lastly, a solution using .filter()
    // Filter out any element not in the args array into an array called result
    const result = array.filter((element) => !args.includes(element));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
