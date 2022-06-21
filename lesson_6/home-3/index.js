'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
    if (!Array.isArray(arr)) return null;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    //return sum > 100;
    console.log(sum > 100);
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true