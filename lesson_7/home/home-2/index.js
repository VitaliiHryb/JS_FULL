// mirror array
const reverseArray = arr => {
    if (Array.isArray(arr) !== true) return null;
    let newArr = arr.slice();
    return newArr.reverse();
}

console.log(reverseArray(['one', 'two', 'three']));