import { fifteen, fullNames } from '.';

describe('Array Cardio Day 1', () => {
  const values = [
    {
      first: 'Galileo',
      last: 'Galilei',
      year: 1564,
      passed: 1642,
    },
    {
      first: 'Johannes',
      last: 'Kepler',
      year: 1571,
      passed: 1630,
    },
    {
      first: 'Michael',
      last: 'Scott',
      year: 1990,
      passed: 2100,
    },
  ];
  test('filter the list of inventors for those who were born in the 1500s', () => {
    const returnValue = fifteen(values);
    expect(returnValue.length).toBe(2);
  });
  test('give us an array of the inventors first and last names', () => {
    const returnValue = fullNames(values);
    expect(returnValue[0]).toContain('Galileo Galilei');
    expect(returnValue[0]).not.toContain('1564');
  });
});
