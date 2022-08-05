// Надежный parser

const jsonString = `{ "name": "John", "age": 30 }`;

const parseUser = jsonData => {
  try {
    const result = JSON.parse(jsonData);
    return result;
  } catch (err) {
    return null;
  }
};

parseUser(jsonString);

export { parseUser };

// // Надежный parser

// const jsonString = `{ "name": "John", "age": 30 }`;

// const parseUser = jsonParam => {
//   return Promise.resolve(jsonParam)
//     .then(data => data)
//     .catch(() => null);
//   // .catch(err => console.log(err));
// };

// parseUser(jsonString);

// export { parseUser };
