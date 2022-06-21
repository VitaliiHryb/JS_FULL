'use strict';

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) return null;
    const [...rest] = arr;
    let newArr = [...rest];
    for (let i = 0; i < newArr.length; i++) {
        if (arr[i] % 2 == 0) newArr[i] += delta;
    }
    return newArr;
    /*console.log(newArr);*/
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []