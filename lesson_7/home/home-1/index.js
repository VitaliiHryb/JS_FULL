// array square
const squareArray = arr => {
    if (Array.isArray(arr) !== true) return null;

    return arr.map(function(i) {
        return i * i;
      })
}

let test = [12,43,43,6,2,4,55,7,22];
console.log(squareArray(test));