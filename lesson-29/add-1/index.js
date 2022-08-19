// Функция для задержки вызова

// Напишите функцию,
// которая выполнит другую ф-цию с определенной задержкой

// Основные требования:
// 1. Файл должен экспортировать функцию под именем delay
// 2. Сигнатура: delay(delay, callback, context, arg1, arg2, arg3, ...),
// где delay - время задержки (число), callback - ф-ция, которая будет вызвана,
// context - контекст для вызова callback,
// arg1, arg2, arg3, ... - аргументы для вызова callback (может быть неограниченное к-во)

'use strict';

const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    callback.bind(context)(...args);
  }, delay);
};

export { delay };

// const test1 = (...rest) => alert(`Привет ${[...rest][1]}`);

// const test2 = (...rest) => {
//   for (let i = 0; i < [...rest].length; i += 1) {
//     console.log(`Привет ${[...rest][i]}`);
//   }
// };

// delay(3000, test2, 'Tom', 'Jack', 'John', 'Jinx');
