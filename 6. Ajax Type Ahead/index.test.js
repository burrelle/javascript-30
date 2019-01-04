import { numberWithCommas, findMatches } from '.';

describe('Ajax type ahead', () => {
  test('add commas to numbers', () => {
    const number = 189142848;
    const stringToMatch = numberWithCommas(number);
    expect(stringToMatch).toBe('189,142,848');
  });

  test('find matches', () => {
    const wordToMatch = 'bos';
    const citiesArray = [
      {
        city: 'Boston',
        state: 'Massachusetts',
      },
      {
        city: 'Redding',
        state: 'California',
      },
    ];
    const matches = findMatches(wordToMatch, citiesArray);
    expect(matches).toHaveLength(1);
    expect(matches[0].city).toContain('Boston');
  });
});
