// Обработка ошибок в Promise
const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(function onSuccess1(data) {
    // (1)
    throw new Error(`Error with data`);
  })
  .catch(function onError1(error) {
    console.error('onError1', error.message);
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(function onError2(error) {
    console.error('onError2', error.message);
    // (2)
    // throw onError2;
    return Promise.reject(new Error('Server error'));
  })
  .then(function onSuccess2(data) {
    console.log('onSuccess2', data);
  })
  .catch(function onError3(error) {
    console.error('onError3', error.message);
  });

// // fetch('https:example.com');

// const successRequest = Promise.resolve({ name: 'Tom' });

// successRequest
//   .then(data => {
//     console.log(data);
//     throw new Error('Unexpected error');
//   })
//   .catch(err => console.warn(err.message));

// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.warn(err.message);
//     // return undefined; (on default)
//     // return Promise.reject('Another error'); // прервали цепочку - option1
//     throw err; // прервали цепочку - option2 // === return Promise.reject(err)
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.warn(err.message);
//   });

// window.addEventListener('unhandledrejection', function (e) {
//   console.log(e.reason.message);
// });
