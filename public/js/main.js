const mainDiv = document.getElementById("bg");
const backgrounds =
[
  "background-1",
  "background-2",
  "background-3",
  "background-4",
  "background-5",
  "background-6",
  "background-7",
  "background-8",
  "background-9",
  "background-10",
  "background-11",
  "background-12",
  "background-13",
  "background-14",
  "background-15",
  "background-16",
  "background-17",
  "background-18",
  "background-19",
  "background-20",
];
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




// setTimeout(function() {
//   animateLines();
// }, 3000);

// function resetAnimation(element) {
//   element.style.animation = 'none';
//   element.offsetHeight;
//   element.style.animation = null;
// }

// function animateLines() {
//   const lines = document.querySelectorAll('.line');
//   const delayBetweenLines = 3000;

//   function animateLine(line, index) {
//     line.style.animation = 'animated-text 3s steps(30, end) forwards';
//     line.addEventListener('animationend', function() {
//       resetAnimation(line);
//       animateLine(lines[(index + 1) % lines.length], (index + 1) % lines.length);
//     });
//   }

//   animateLine(lines[0], 0);
// }





