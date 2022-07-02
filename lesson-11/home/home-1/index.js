// Разбить строку на подстроки (Split string into substrings)

// num указывает количество символов в каждой подстроке
// return [подстрока, подстрока, ... подстрока]
// добавить точку '.' в последнюю подстроку

// Algorithm
// 1. Text ? string, if not => null
// 2. empty array for result and startPosition for push
// 3. returns a portion of the string (we need 4)
// 4. add '.' to a last chunk
// 5. push our ortion of the string in empty array

const splitString = (text, length = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, length);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < length) {
      chunk = chunk.concat('.'.repeat(length - chunk.length));
    }
    strArr.push(chunk);
    startPosition += length;
  }
  return strArr;
};

// console.log(splitString('abcd efghi', 4));
// console.log(splitString('abcdefghi', 4));
