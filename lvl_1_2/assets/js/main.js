const timeElement = document.querySelector(".zeit");

function checkDown() {
  let time = 100;
  let interval = setInterval(function () {
    if (time === -1) {
      clearInterval(interval);
    } else {
      timeElement.innerHTML = time + "%";
      time--;
    }
  }, 100);
}
