const Calculator = require('./calculator');

const calculator = new Calculator();

it('Add', () => expect(calculator.add(1, 2)).toBe(3));

it('Subtract', () => expect(calculator.subtract(1, 2)).toBe(-1));

it('Divide', () => expect(calculator.divide(4, 2)).toBe(2));

it('Multiply', () => expect(calculator.multiply(4, 2)).toBe(8));