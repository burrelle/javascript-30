/* eslint no-param-reassign:
  ["error", { "props": true, "ignorePropertyModificationsFor": ["obj"] }]
*/

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
export const fifteen = input =>
  input.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
export const fullNames = input =>
  input.map(inventor => `${inventor.first} ${inventor.last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
export const ordered = input =>
  input.sort((a, b) => (a.year > b.year ? 1 : -1));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
export const totalYears = input =>
  input.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year),
    0,
  );

// 5. Sort the inventors by years lived
export const oldest = input =>
  input.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
  });

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
export const alpha = list =>
  list.sort((lastOne, nextOne) => {
    const [aLast] = lastOne.split(', ');
    const [bLast] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
  });

// 8. Reduce Exercise
// Sum up the instances of each of these
export const transportation = data =>
  data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item] += 1;
    return obj;
  }, {});
