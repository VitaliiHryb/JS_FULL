// Count occurences

const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }

  let startPosition = -1;
  let count = 0;
  while (true) {
    startPosition = text.indexOf(str, startPosition + 1);
    if (startPosition === -1) {
      break;
    }

    count += 1;
  }
  return count;
};

console.log(countOccurrences('abcdefg', 'a'));
console.log(countOccurrences('abcdefg', 'b'));
console.log(countOccurrences('abccdefg', 'bcc'));
