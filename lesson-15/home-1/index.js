// Фабрика калькуляторов с памятью
// input: -
// output: Obj with methods (odd, decrease, reset, getMenu)

const createCalculator = () => {
  let result = 0;

  function add(num) {
    result += num;
  }

  function decrease(num) {
    result -= num;
  }

  function reset() {
    result = 0;
  }

  function getMemo() {
    return result;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

export { createCalculator };
