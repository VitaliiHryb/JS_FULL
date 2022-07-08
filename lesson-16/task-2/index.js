// array of functions
/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

// console.log(arr[0]());
// console.log(arr[5]());

export { arr };
