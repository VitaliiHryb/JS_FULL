// фильтрацияя массива
// task-1 short
const getSpecialNumbers = numbers =>
 numbers.filter(num => num % 3 === 0);


const arr = [1,2,3,4,5,6,35,34,3,4,34,34,4,3,4,3,434,3,3,5,6,9];

console.log(getSpecialNumbers(arr));
console.log(arr);

// изменяет массив
/*const getSpecialNumbers = numbers => {
    let getSpecialNumbers = [];

    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            getSpecialNumbers.push(numbers[i]);
        }
    }

    return getSpecialNumbers;
};

console.log(getSpecialNumbers([1,2,3,4,5,6,35,34,3,4,34,34,4,3,4,3,434,3,3,5,6,9]));*/

// task-1 long version
/*
const getSpecialNumbers = numbers => {
    let SpecialNumbers = [];

    function checkIfSpecialNumber(num) {
        if (num % 3 === 0) {
            SpecialNumbers.push(num);
        }
    }

    numbers.forEach(checkIfSpecialNumber);

    return SpecialNumbers;
};

const arr = [1,2,3,4,5,6,35,34,3,4,34,34,4,3,4,3,434,3,3,5,6,9];

console.log(getSpecialNumbers(arr));*/