// Declaring Variables
/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

let a = 17;

if (a) {
  let a = 1;

  console.log(a);
}

console.log(a);

// let
// => 1
// => 17

// var
// => 1
// => 1

// var a = 17;

// if (a) {
//   var a = 1;

//   console.log(a);
// }

// console.log(a);
