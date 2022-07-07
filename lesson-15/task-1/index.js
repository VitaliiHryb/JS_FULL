// lexical enviroment 2

// --- counter ---

const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

export { makeCounter };

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter1()); // 2
console.log(counter2()); // 1

// --- give a message ---
// const message = 'Have a good day!';

// function sendMessage(name) {
//   let greeting = 'Hi! ';

//   if (name) {
//     const greeting = 'Hello, ';
//     const name = 'Tad';
//     console.log(greeting + name);
//   } else {
//     let message = 'Hi';
//     console.log(message);
//   }
// }

// sendMessage('Ann');
// sendMessage();

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
