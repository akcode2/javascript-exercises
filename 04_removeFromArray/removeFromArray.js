const removeFromArray = function(array, ...args) {
    let length = args.length;
    let argToFind = args[0];

    for (let i = 0; i < length; i++) {
        let argToFind = args[i];
        // Arrow functions have implicit return. If element
        // strictly equals argToFind, return truthy value.
        let finderFunction = (element) => element === argToFind;
        let foundIndex = array.findIndex(finderFunction);
        // Remove 1 element at the foundIndex position
        array.splice(foundIndex, 1);
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
