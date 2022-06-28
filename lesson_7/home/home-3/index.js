//
const increaseEvenEl = (arr, delta) => {
    if (Array.isArray(arr)) {
        return arr.map(el => el + delta);
    }
    return null;
}

console.log(increaseEvenEl([3, 4, 5], 2));

// function butyrdMap(func, arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(func(arr[i]));
//     }
//     return result;
// }