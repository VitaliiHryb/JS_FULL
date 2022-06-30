// copy Object with assign
// используй Object.assign(obj1, obj2) ==> obj1 witch is sum of obj1 and obj2

const copyObj = obj => Object.assign({}, obj);

// examples
console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(copyObj({ Ann: 56, Andrey: 7 }));

// the same but copy only on the first lvl
// copy Object with spred operator [...res]

const copy = obj1 => {
  const user = { ...obj1 };
  return user;
};

console.log(copy({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(copy({ Ann: 56, Andrey: 7 }));

// destructorisation
const someObj = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
  Ann: 56,
};
const { Bob } = someObj;

console.log(Bob); // ==> 18;

// rename with destructirisation
const { Bob: myName } = someObj;

console.log(myName); // ==> 18;

// add key: value but not in obj (dont understand how it works)

const { surname = 'default', ...restProps } = someObj;

console.log(surname); // ==> default;
console.log(restProps); // ==> {John Doe: 19, Tom: 17, Bob: 18, Ann: 56};
