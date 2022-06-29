// object creation
const transformToObject = arr => {
  let obj = {};
  arr.forEach(element => {
    obj[element] = element;
  });
  return obj;
};

// examples
transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

// examples
transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' });

// const arr = [1, 2, 3, 4, 5, 6, 35, 34, 3, 4, 34, 34, 4, 3, 4, 3, 434, 3, 3, 5, 6, 9];

// console.log(trunsformToObject(arr));
// console.log(arr);
