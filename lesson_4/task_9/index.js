let sum = 0;
const num = 1234;

for (let i = 0; i <= 10000000; i++) {
    sum += i;
}

/*let div = (sum / 1234) | 0;*/
let div = parseInt(sum / num);
let mod = sum % num;
console.log(mod > div);

/* mod */
/* let remainderOfTheDivision = sum % 1234; */
/* let mod = sum % 1234; */
/* div */
/* let integerPartOfDivision = (sum - remainderOfTheDivision) / 1234; */
/* let div = (sum - mod) / 1234; */

/* 10000000 */