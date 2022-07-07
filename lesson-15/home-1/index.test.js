import { createCalculator } from './index';

it('calculator factory', () => {
  const calc = createCalculator();

  calc.add(17);
  expect(calc.getMemo()).toEqual(17);
  calc.decrease(10);
  expect(calc.getMemo()).toEqual(7);
  calc.reset();
  expect(calc.getMemo()).toEqual(0);
});
