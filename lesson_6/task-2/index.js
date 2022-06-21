'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null