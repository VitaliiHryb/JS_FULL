// unsorted array => sorted array

//array increase
/*const sortDesc = numbers =>
    numbers.slice().sort((a, b) => a - b);
}*/

// array decrease
const sortDesc = numbers =>
    numbers.slice().sort((a, b) => b - a);


const arr = [1,2,3,4,5,6,35,34,3,4,34,34,4,3,4,3,434,3,3,5,6,9];

console.log(arr);
console.log(sortDesc(arr));

// const sortDesc = function(numbers) {
//     return numbers.slice().sort((a, b) => b - a);
// }

// const sortDesc = numbers => {
//     return numbers.slice().sort((a, b) => b - a);
// }

// const sortDesc = numbers => {
//     let middleResult = numbers.slice();
//     return middleResult.sort((a, b) => b - a);
//     //return numbers.slice().sort((a, b) => b - a);
// }

// const obj = {
//     hi: () => 'hi',
// }


// obj.hi();