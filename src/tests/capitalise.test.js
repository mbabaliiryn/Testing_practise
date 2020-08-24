import capitalize from '../code/capitalise';

it('capitalizes "Microverse"', () => expect(capitalize('microverse')).toBe('Microverse'));
it('capitalize "hello world', () => expect(capitalize('hello world')).toBe('Hello world'));
