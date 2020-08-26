import cipher from '../code/cipher';

it('Encrypts string', () => {
  expect(cipher('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

it('Encrypts string', () => {
  expect(cipher('Microverse', 3))
    .toBe('Plfuryhuvh');
});

it('Encrypts string', () => {
  expect(cipher('y', 5))
    .toBe('d');
});
