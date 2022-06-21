const cloneArr = arr => {
    if (!Array.isArray(arr)) return null;
    const [...rest] = arr;
    const newArr = [...rest];
    return newArr;
    /*console.log(newArr);*/
};