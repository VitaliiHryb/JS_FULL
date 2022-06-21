const checker = arr => {
    if (!Array.isArray(arr)) return null;
    const [...rest] = arr;
    const newArr = [...rest];
    let min = Math.min(...newArr);
    let max = Math.max(...newArr);
    if (Array.isArray(min)) {
        let firstSum = 0;
        for (let i = 0; i < min.length; i++) {
            firstSum += min[i];
        }
        min = firstSum;
    }
    if (Array.isArray(max)) {
        let lastSum = 0;
        for (let j = 0; j < max.length; j++) {
            lastSum += max[j];
        }
        max = lastSum;
    }
    const sum = min + max;
    return sum > 1000;
};