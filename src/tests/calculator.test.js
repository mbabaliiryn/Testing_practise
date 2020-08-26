import Calculator from '../code/calculator';

it('Add', () => expect(Calculator.add(1, 2)).toBe(3));

it('Subtract', () => expect(Calculator.subtract(1, 2)).toBe(-1));

it('Divide', () => expect(Calculator.divide(4, 2)).toBe(2));

it('Multiply', () => expect(Calculator.multiply(4, 2)).toBe(8));
