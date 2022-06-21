function contains(arr, elem) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    const unique = [];
    for (let i = 0; i < array.length; i += 1) {
        if (contains(unique, array[i]) === false) {
            unique.push(array[i]);
        }
    }
    return unique;
}
console.log([5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0]);
console.log(removeDuplicates([5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0]));