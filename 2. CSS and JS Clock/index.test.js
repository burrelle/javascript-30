import { getSecondsDegrees, getMinutesDegrees, getHoursDegrees } from './index';

const seconds = 4;
const minutes = 10;
const hours = 3;

describe('CSS and JS Clock', () => {
  test('second degrees back', () => {
    const secondDegrees = getSecondsDegrees(seconds);
    expect(secondDegrees).toBe(114);
  });
  test('minute degrees back', () => {
    const secondDegrees = getMinutesDegrees(seconds, minutes);
    expect(secondDegrees).toBe(150.4);
  });
  test('hour degrees back', () => {
    const hourDegrees = getHoursDegrees(minutes, hours);
    expect(hourDegrees).toBe(185);
  });
});
