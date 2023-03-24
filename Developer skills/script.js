"use strict";

var specialNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textcontent = specialNumber;
console.log(specialNumber);
var score = 20;
var high = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing";
  specialNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(specialNumber);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess != specialNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > specialNumber ? "Too High!!" : "Too Low";
      score--;
    } else {
      document.querySelector(".message").textContent =
        "You Lost The game Try Again!!!";
    }
    document.querySelector(".score").textContent = score;
  } else if (guess == specialNumber) {
    document.querySelector(".message").textContent = "You Win";
    document.querySelector(".number").textContent = specialNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > high) {
      high = score;
      console.log(high);
      document.querySelector(".highscore").textContent = high;
    }
  }
});
