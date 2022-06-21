'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
    const [start, ...rest] = numbers;
    const arr = [...rest, start];
    return arr;
}

/*/ spred operator
  const [a, b, ...rest] = numbers; */

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        newArr.push(numbers[i]);
    }

    const first = newArr.shift();
    newArr.push(first);
    return newArr;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]