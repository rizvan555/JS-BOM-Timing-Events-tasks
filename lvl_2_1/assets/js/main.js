const countElement = document.querySelector("#count");
const message = document.querySelector(".message");

function stopCount() {
  let count = 10;
  let interval = setInterval(function () {
    if (count === -1) {
      clearInterval(interval);
      message.style.display = "none";
    } else {
      countElement.textContent = count;
      count--;
    }
  }, 1000);
}
stopCount();
