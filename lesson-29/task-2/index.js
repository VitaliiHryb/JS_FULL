// Write with interval
'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// const pinger = (num, period) => {
//   let i = num;
//   console.log('Ping');
//   const interval = setInterval(() => {
//     if (--i > 0) {
//       console.log('Ping');
//     } else {
//       clearInterval(interval);
//     }
//   }, period);

//   // setTimeout(() => {
//   //   clearInterval(interval);
//   // }, num * period);

//   // console.log(interval);
// };

// stop function with:
// clearInterval(2);
// clearInterval(3);

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval

// setTimeout(() => console.log('Hi'), 5000);
// clearTimeout(() => console.log('Hi'), 5000);
