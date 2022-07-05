// simple assertion

it('17 and in Africa', () => {
  expect(17).toEqual(17);
});

it('18 even not in Africa', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('shoud get only even numbers from arrray', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
