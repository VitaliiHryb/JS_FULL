// Function factory
/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

// input: number
// output: [functions];

// createArrayOfFunctions(9)[5](); ==> 5

// if input === NaN return null;
// if input === () return [];

// callback function = takes ()
// callback function = return index

const createArrayOfFunctions = len => {
  if (len === undefined) return [];
  if (typeof len !== 'number') return null;

  const arr = [];

  for (let index = 0; index < len; index += 1) {
    arr[index] = function () {
      return index;
    };
  }

  return arr;
};

// console.log(createArrayOfFunctions(9)[5]()); // ==> 5

// export { createArrayOfFunctions };
