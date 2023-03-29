function sayHallo() {
  console.log("Hallo");
}

function wordBoard() {
  console.log(setTimeout(sayHallo, 3000));
}
wordBoard();

// ============================================================

function checkSecondsDown() {
  let seconds = 10;
  let interval = setInterval(function () {
    if (seconds == 0) {
      console.log("Endlich Feierabend");
      clearInterval(interval);
    } else {
      console.log(seconds);
      seconds--;
    }
  }, 1000);
}
checkSecondsDown();
