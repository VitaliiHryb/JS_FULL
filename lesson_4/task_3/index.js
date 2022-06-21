for (let i = 1; i <= 5; i++) {
    console.log('\n=> ' + i + ' <=');
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i * j);
    }
}
/* --- Lection 4 TASK3 MORE SOLUTIONS --- */
/*
let m = 10;
const n = 20;
let result = 1;

for (let m = 0; m <= n; m++) {
    if (m % 2 === 0) continue;
    result += m;
}

console.log('Result: ' + result);
*/

/*
do {
    if (m % 2 === 1) {
        result += m;
    }
    m++;
} while (m <= n);
*/

/*
let result = 1;

while (true) {
    const userInput = prompt('Your number');
    if (!userInput) {
        break;
    }
    result += Number(userInput);
}

console.log('Result: ' + result);
*/