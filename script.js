const second = document.querySelector("#sec");
const minute = document.querySelector("#mins");
const hour = document.querySelector("#hours");
const day = document.querySelector("#days");

const newYear = "1 Jan 2023";
// const newYear = prompt("Enter a date...");

function countdown() {
  const currentDate = new Date();

  const newYearDate = new Date(newYear);

  const timeRemaining = (newYearDate - currentDate) / 1000;

  const days = Math.floor(timeRemaining / 3600 / 24);

  const hours = Math.floor(timeRemaining / 3600) % 24;

  const mins = Math.floor(timeRemaining / 60) % 60;

  const sec = Math.floor(timeRemaining) % 60;

  second.innerHTML = zero(sec);
  minute.innerHTML = zero(mins);
  hour.innerHTML = zero(hours);
  day.innerHTML = zero(days);

  //   console.log(days, hours, mins, sec);
}

function zero(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
