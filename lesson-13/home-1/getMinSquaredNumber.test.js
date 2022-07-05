import getMin from './getMinSquaredNumber';

it('shoud get null', () => {
  const result = getMin([]);
  expect(result).toEqual(null);
});

it('shoud get NaN', () => {
  const result = getMin(['-777, 3, -2, 6, 45, -20']);
  expect(result).toEqual(NaN);
});

it('shoud get min number', () => {
  const result = getMin([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
