const text =
  "Undergraduate CSE Student at AIUB | Interested in Software & Web Development | Dedicated Learner with Strong Fundamentals";

let index = 0;
const speed = 50;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
