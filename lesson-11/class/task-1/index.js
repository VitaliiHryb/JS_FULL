// Разбить текст на строки
/*'Abcd\n efg\nH' =>
Abc Abcd
  efg
    H*/

// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => 'Abcd/nEfg'

const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

console.log(splitText('abcdefg'), 4);

// // `I'm a student`
// // 'I`m a student'

// const text = 'message';

// const myMessage = `
//   The text is ${text.toUpperCase()},
//   And something else.
// `;

// // console.log(myMessage);
// // console.log(text[text.length - 1]);
// console.log(text.charAt(text.length - 1));

// // text[2] = 'Q' - can not change string

// text.split('e');
// console.log(text);
