import { getMinSquareNumber, calc } from './calculator';

it('shoud get min squared number', () => {
  const result = getMinSquareNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});

it('shoud get null', () => {
  const result = calc(
    [-777, 3, -2, 6, 45, -20] || { hi: 'hi', my: 'my', name: 'name' } ||
      5 ||
      true,
  );
  expect(result).toEqual(null);
});

it('shoud get undefined', () => {
  const result = calc('A');
  expect(result).toEqual(`A = ${undefined}`);
});

it('shoud get sum', () => {
  const result = calc('4 + 4');
  expect(result).toEqual(`4 + 4 = 8`);
});

it('shoud get minus', () => {
  const result = calc('14 - 4');
  expect(result).toEqual(`14 - 4 = 10`);
});

it('shoud get drob', () => {
  const result = calc('12 / 4');
  expect(result).toEqual(`12 / 4 = 3`);
});

it('shoud get pomnojenya', () => {
  const result = calc('5 * 5');
  expect(result).toEqual(`5 * 5 = 25`);
});
