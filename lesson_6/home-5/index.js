const reverseArray = arr => {
    if (!Array.isArray(arr)) return null;
    const [...rest] = arr;
    let newArr = [...rest];

    newArr.reverse();

    return newArr;
    /*console.log(newArr);*/
};