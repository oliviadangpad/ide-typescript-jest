import { add, getNumbers } from '../src/app';

test('add function', () => {
  expect(add(2, 3)).toBe(5);
});

test('getNumbers returns an array with correct values', () => {
  const result = getNumbers();

  const expectedArray = [1, 2, 3, 4, 5];

  expect(result).toEqual(expectedArray);
});