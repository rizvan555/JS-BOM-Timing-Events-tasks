const cat = document.querySelector("#cat");

let leftPosition = 0;
let catWalkInterval;

function catWalk() {
  catWalkInterval = setInterval(() => {
    leftPosition += 10;
    cat.style.left = leftPosition + "px";
  }, 500);
  if (leftPosition >= window.innerWidth) {
    clearInterval(catWalkInterval);
    cat.style.left = leftPosition + "px";
  }
}

function pause() {
  clearInterval(catWalkInterval);
}

function turn() {
  catWalkInterval = setInterval(() => {
    cat.style.transform = "rotateY(180deg)";
    leftPosition = 0;
    cat.style.left = leftPosition + "px";
    clearInterval(catWalkInterval);
  }, 200);
}

function catSpeed() {
  catWalkInterval = setInterval(() => {
    leftPosition += 100;
    cat.style.left = leftPosition + "px";
    if (leftPosition >= window.innerWidth) {
      cat.style.left = leftPosition + "px";
      clearInterval(catWalkInterval);
    }
  }, 100);
}
