"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const numberStillNotGuessed = function (text) {
  displayMessage(text);
  score--;
  document.querySelector(".score").textContent = score;
};

const gameLost = function () {
  displayMessage("You lost the game!");
  document.querySelector(".score").textContent = 0;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //convert to number pt ca in casuta in care scrii, e mereu text
  console.log(guess);
  //when number is not guessed
  //   if (guess !== secretNumber) {
  //     if (score > 1) {
  //       numberStillNotGuessed(
  //         guess < secretNumber ? 'Too Low!' : 'Too High!'
  //       );
  //     } else {
  //       gameLost();
  //     }
  //   }

  //When guess is too low
  let scenario = "";
  if (guess < secretNumber) {
    scenario = "Too Low!";
  } else {
    scenario = "Too High!";
  }
  numberStillNotGuessed(scenario);

  //     //When guess is too low - initial program
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       numberStillNotGuessed('Too Low!');
  //     } else {
  //       gameLost();
  //     }

  //     //When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       numberStillNotGuessed('Too High!');
  //     } else {
  //       gameLost();
  //     }
  //   }

  // Losing the game
  if (score < 1) {
    gameLost();
    return;
  }

  //Winning the game
  if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.color = "#127369";

    document.querySelector(".check").disabled = true;
    document.querySelector(".check").style.color = "#127369";

    document.querySelector(".again").style.color = "#127369";

    document.querySelector("body").style.backgroundColor = "#127369";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //When there is no input
  if (!guess) {
    displayMessage("No number!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".check").disabled = false;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#10403B";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".check").style.color = "#10403B";
  document.querySelector(".again").style.color = "#10403B";
  document.querySelector(".number").style.color = "#10403B";
});
