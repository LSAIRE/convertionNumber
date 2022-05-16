import convertRomanToInteger from './functions/convertionNumber';

test('test 1: XXI is 21', () => {
  expect(convertRomanToInteger('XXI')).toBe(21);
});

test('test 2: XL is 40', () => {
  expect(convertRomanToInteger('XL')).toBe(40);
});

test('test 3: LVIII is 58', () => {
  expect(convertRomanToInteger('LVIII')).toBe(58);
});

test('test 1: xxi is 21', () => {
  expect(convertRomanToInteger('xxi')).toBe(21);
});

test('test 2: xl is 40', () => {
  expect(convertRomanToInteger('xl')).toBe(40);
});

test('test 3: lviii is 58', () => {
  expect(convertRomanToInteger('lviii')).toBe(58);
});