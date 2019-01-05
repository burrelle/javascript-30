export const isAdult = people =>
  people.some(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
  });

export const allAdults = people =>
  people.every(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
  });

export const findComment = (comments, id) =>
  comments.find(comment => comment.id === id);

export const findIndex = (comments, id) =>
  comments.findIndex(comment => comment.id === id);

export const removeComment = (comments, index) => [
  ...comments.slice(0, index),
  ...comments.slice(index + 1),
];
