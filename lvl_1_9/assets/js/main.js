const clock = document.querySelector("#clock");

function startTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  clock.textContent = hour + ":" + minute + ":" + second;
  setTimeout(startTime, 1000);
}
startTime();

function checkTime(i) {
  if (i < 10) {
    i = 0 + i;
  }
  return i;
}
