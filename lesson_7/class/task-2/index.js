// unsorted array => sorted array

//array will change
/*const sortArray = numbers => {
    numbers.sort((a, b) => b - a);
    return numbers;
}*/

// arraywill not change
const sortDesc = numbers => {
    const copy = numbers.slice();
    copy.sort((a, b) => b - a);
    return copy;
}

const arr = [1,2,3,4,5,6,35,34,3,4,34,34,4,3,4,3,434,3,3,5,6,9];

console.log(arr);
console.log(sortDesc(arr));