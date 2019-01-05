import { isAdult, allAdults, findComment, findIndex, removeComment } from '.';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

describe('Array Cardio Day 2', () => {
  test('are there people over 18 in the people array', () => {
    const result = isAdult(people);
    expect(result).toBe(true);
  });

  test('are all the people over 18 in the people array', () => {
    const result = allAdults(people);
    expect(result).toBe(false);
  });

  test('find a comment by id', () => {
    const { text, id } = findComment(comments, 823423);
    expect(text).toBe('Super good');
    expect(id).toBe(823423);
  });

  test('find index of comment by id', () => {
    const index = findIndex(comments, 823423);
    expect(index).toBe(1);
  });

  test('find index of comment by id and then remove it', () => {
    const index = findIndex(comments, 823423);
    const result = removeComment(comments, index);
    expect(result).toHaveLength(4);
  });
});
