import importType from 'eslint-plugin-import/lib/core/importType';
import { arr } from './index';

it('shoud get array element', () => {
  const result = arr[0]();
  expect(result).toEqual(0);
});

it('shoud get array element', () => {
  const result = arr[5]();
  expect(result).toEqual(5);
});
