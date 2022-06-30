/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// используй for..in цикл.

// пройтись циклом по обьекту
// проверить условие value >= 18
// записать в обьект key : velue удовлетворяющие условие
// вернуть новый обьект

const copyObj = obj => {};

// examples
console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(copyObj({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
