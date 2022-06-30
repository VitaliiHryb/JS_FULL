// Iterate object keys
// use Object.keys
//  console.log all values of obj
/**
 * @param {object} obj
 * @return {undefined}
 */
const getKeys = obj => Object.keys(obj).forEach(key => console.log(key));

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel

// function getKeys(obj) {
//   const objKeys = Object.keys(obj);
//   objKeys.forEach(key => console.log(key));
// }
