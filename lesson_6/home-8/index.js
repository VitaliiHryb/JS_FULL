const sortAsc = arr => {
    if (!Array.isArray(arr)) return null;
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length - 1 - n; i++) {
            if (arr[i] > arr[i + 1]) {
                const buff = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = buff;
            }
        }
    }
    return arr;
    /*console.log(arr);*/
};

const sortDesc = arr => {
    if (!Array.isArray(arr)) return null;
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length - 1 - n; i++) {
            if (arr[i] > arr[i + 1]) {
                const buff = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = buff;
            }
        }
    }
    arr.reverse();
    return arr;
    /*console.log(arr);*/
};

sortAsc([1, 23, 43, 3, 65, 5, 89, 4, 7, 78, 98]);
sortDesc([1, 23, 43, 3, 65, 5, 89, 4, 7, 78, 98]);