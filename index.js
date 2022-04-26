let computerGuessNumber;
let userGuess = [];
let previosAttempts = 1;
let maxAttempts = 0;
let start = new Audio("audio/Start.mp3");
let gameOver = new Audio("audio/Gameover.mp3");
let winner = new Audio("audio/Winner.mp3");

// Random Number generate
function randomNumber() {
  computerGuessNumber = Math.floor(Math.random() * 100);
}

//Hide the event screen and new game button

document.getElementById("event-button").style.display = "none";
document.getElementById("event-screen").style.display = "none";

//Game Start
function startGame() {
    start.play();
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("event-screen").style.display = "block";
}

//  New Game
function newGame() {
  document.getElementById("event-button").style.display = "block";
  document.getElementById("guess-number").setAttribute("disabled", true);
  userGuessNumber = document.getElementById("guess-number").value = "";
}

// New Game Start
function startNewGame() {
  document.getElementById("welcome-screen").style.display = "block";
  document.getElementById("event-screen").style.display = "none";
  window.location.reload();
  start.play();
}
//Two function or two level

function easyMode() {
  maxAttempts = 10;
  startGame();
}
function hardMode() {
  maxAttempts = 5;
  startGame();
}

//User data process or Main logic of game
function userData() {
  if (previosAttempts <= maxAttempts) {
    while (previosAttempts <= maxAttempts) {
      userGuessNumber = document.getElementById("guess-number").value;

      userGuess = [...userGuess, userGuessNumber];
      document.getElementById("previous").innerHTML = userGuess;
      document.querySelector(".attempts").innerHTML = previosAttempts;
      previosAttempts++;
      if (computerGuessNumber < userGuessNumber) {
        document.querySelector(".user-guess  h2").innerHTML =
          "Your guess is High 👆";
        userGuessNumber = document.getElementById("guess-number").value = "";

        break;
      } else if (computerGuessNumber > userGuessNumber) {
        document.querySelector(".user-guess  h2").innerHTML =
          "Your guess is Low 👇";
        userGuessNumber = document.getElementById("guess-number").value = "";

        break;
      } else {
        document.querySelector(".user-guess  h2").innerHTML =
          "Hurray🚩Your guess is Correct🎉";
          winner.play();
        userGuessNumber = document.getElementById("guess-number").value = "";

        newGame();
        break;
      }
    }
  } else {
    newGame();
    document.querySelector(".user-guess  h2").innerHTML ="Oops You Loose 😯 the Correct Number is " + computerGuessNumber;
    gameOver.play();

  }
}
