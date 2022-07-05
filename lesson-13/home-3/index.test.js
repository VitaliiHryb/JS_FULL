import { reverseArray, withdraw, getAdults } from './index';

const test_data = {
  reverseArray: [
    { expect: [[1, 2, 3, 4]], toEqual: [4, 3, 2, 1] },
    { expect: [[]], toEqual: [] },
    { expect: ['Not array'], toEqual: null },
  ],
};

const test_data_1 = {
  withdraw: [
    {
      expect: [['Dima', 'Hlib', 'Oleg'], [100, 70, -5], 'Dima', 50],
      toEqual: 50,
    },
    {
      expect: [['Dima', 'Hlib', 'Oleg'], [100, 70, -5], 'Hlib', 10],
      toEqual: 60,
    },
    {
      expect: [['Dima', 'Hlib', 'Oleg'], [100, 70, -5], 'Oleg', 2],
      toEqual: -1,
    },
  ],
};

const test_data_2 = {
  getAdults: [
    {
      expect: [{ 'John Doe': 19, Tom: 17, Bob: 18 }],
      toEqual: { 'John Doe': 19, Bob: 18 },
    },
    {
      expect: [{ Ann: 56, Andrey: 7 }],
      toEqual: { Ann: 56 },
    },
    {
      expect: [{ 'John Doe': 17, Tom: 17, Bob: 17 }],
      toEqual: {},
    },
  ],
};

it('reverseArray', () => {
  for (let test of test_data.reverseArray) {
    const expected = reverseArray(...test.expect);
    expect(expected).toEqual(test.toEqual);
  }
});

it('reverseArray', () => {
  for (let test of test_data_1.withdraw) {
    const expected = withdraw(...test.expect);
    expect(expected).toEqual(test.toEqual);
  }
});

it('getAdults', () => {
  for (let test of test_data_2.getAdults) {
    const expected = getAdults(...test.expect);
    expect(expected).toEqual(test.toEqual);
  }
});
