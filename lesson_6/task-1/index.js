'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
    let fitstNum = arr[0];
    let arrLength = arr.length;
    let lastNum = arr[arrLength - 1];
    if (Array.isArray(arr)) {
        return [arrLength, fitstNum, lastNum];
    } else return null;
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]