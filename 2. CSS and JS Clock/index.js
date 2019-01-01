/* eslint max-len: ["error", { "code": 120 }] */

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
export const getSecondsDegrees = seconds => (seconds / 60) * 360 + 90;
export const getMinutesDegrees = (seconds, minutes) =>
  (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
export const getHoursDegrees = (minutes, hours) =>
  (hours / 12) * 360 + (minutes / 60) * 30 + 90;
function setDate() {
  const now = new Date();
  const secondsDegrees = getSecondsDegrees(now.getSeconds());
  const minuteDegrees = getMinutesDegrees(now.getSeconds(), now.getMinutes());
  const hourDegrees = getHoursDegrees(now.getMinutes, now.getHours());
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
