// put your code here
let acc = 0;

function add(number) {
  acc += number;
}

function decrease(number) {
  acc -= number;
}

function reset() {
  acc = 0;
}

function getMemo() {
  return acc;
}

// export default let acc = 0; (dont understand how)
export { add, decrease, reset, getMemo };
