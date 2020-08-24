const analyze = require('../code/array');

it('returns correct array summary', () => {
  expect(analyze([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

it('returns correct array summary', () => {
  expect(analyze([2, 4])).toStrictEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});