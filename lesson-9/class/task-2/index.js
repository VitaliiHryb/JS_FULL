// copy Object with assign
// используй Object.assign(obj1, obj2) ==> obj1 witch is sum of obj1 and obj2

const copyObj = obj => Object.assign({}, obj);

// examples
console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(copyObj({ Ann: 56, Andrey: 7 }));
