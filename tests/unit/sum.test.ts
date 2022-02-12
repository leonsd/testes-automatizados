import { sumTwoNumbers } from '../../src';

describe('Sum', () => {
  it('should sum two numbers and return the correct result', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const result = sumTwoNumbers(numberOne, numberTwo);

    expect(result).toBe(4);
  });
});
