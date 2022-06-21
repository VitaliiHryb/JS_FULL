'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
    if (!Array.isArray(arr)) return null;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let j = arr[i] * arr[i];
        newArr.push(j);
    }
    return newArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]