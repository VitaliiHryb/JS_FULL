//clone arr
const cloneArr = arr => {
    if(Array.isArray(arr)) {
        return  arr.slice();
    }
    return null;
}