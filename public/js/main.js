const mainDiv = document.getElementById("bg");
const backgrounds = ["background-1", "background-2", "background-3", "background-4", "background-5"];
let currentIndex = -1;

function toggleBackground() {
  if (currentIndex >= 0) {
    mainDiv.classList.remove(backgrounds[currentIndex]);
  }

  currentIndex = (currentIndex + 1) % backgrounds.length;

  if (currentIndex < backgrounds.length - 1) {
    mainDiv.classList.add(backgrounds[currentIndex]);
  } else {
    mainDiv.classList.remove(...backgrounds);
  }

  // if (currentIndex < backgrounds.length) {
  //   mainDiv.classList.add(backgrounds[currentIndex]);
  // } else {
  //   mainDiv.classList.remove(...backgrounds);
  // }
}




setTimeout(function() {
  animateLines();
}, 3000);

function resetAnimation(element) {
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = null;
}

function animateLines() {
  const lines = document.querySelectorAll('.line');
  const delayBetweenLines = 3000;

  function animateLine(line, index) {
    line.style.animation = 'animated-text 3s steps(30, end) forwards';
    line.addEventListener('animationend', function() {
      resetAnimation(line);
      animateLine(lines[(index + 1) % lines.length], (index + 1) % lines.length);
    });
  }

  animateLine(lines[0], 0);
}





