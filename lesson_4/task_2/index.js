let n = 30;
let m = 10;
let result = 1;
let j = m;
let i = n;

do {
    if (j % 2 === 1) {
        result *= j;
    }
    j++;
} while (j <= i);

console.log(result);

/*
let n = 20;
let result = 1;

for (let m = 10; m <= n; m++) {
    if (m % 2 === 1) {
        result *= m;
    }
}

console.log(result);
*/

/*
let n = 30;
let m = 10;
let result = 1;

do {
    if (m % 2 === 1) {
        result *= m;
    }
    m++;
} while (m <= n);

console.log(result);
*/