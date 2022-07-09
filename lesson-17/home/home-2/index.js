// Функция bind

// call
// apply
// bind(func, context, [arg1],[arg2] ...)

function bind(func, context, ...args) {
  return function (...FnArgs) {
    return func.call(context, ...args, ...FnArgs);
  };
}

// export { bind }

// option 2 ---------------------------------------------------------------
// var bind = function (fn, context) {
//   // обрезаем ненужные аргументы (функцию и контекст)
//   var bindArgs = [].slice.call(arguments, 2);
//   return function () {
//     // здесь все аргументы будут необходимы
//     var fnArgs = [].slice.call(arguments);
//     // собираем все
//     return fn.apply(context, bindArgs.concat(fnArgs));
//   };
// };

// option 3 ---------------------------------------------------------------
// function bind(func, context, ...args) {
//   return function () {
//     const FnArgs = [].slice.call(arguments);
//     console.log(`${args} + ${FnArgs} = ${args.concat([...arguments])}`);
//     return func.apply(context, args.concat(FnArgs));
//   };
// }

// testing ---------------------------------------------------------------

// let user = {
//   firstName: 'Вася',
// };

// function func(phrase) {
//   alert(phrase + ', ' + this.firstName);
// }

// // привязка this к user
// let funcUser = func.bind(user);

// funcUser('Привет'); // Привет, Вася (аргумент "Привет" передан, при этом this = user)

// ---------------------------------------------------------------
// function printNameAndYear(year) {
//   return `${this.name} - ${year}`;
// }

// const nameYear = bind(printNameAndYear, { name: 'John' }, 20);
// nameYear();
// const nameAnotherYear = bind(nameYear, { name: 'Jack' }, 50);
// nameAnotherYear();
