// Your Code Here
// array name: "questions". properties: "text", "correctAnswer".

let userName = window.prompt("Please enter your name:");
let userScore = 0;
let playAgain = true;

function playGame() {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let userAnswer = window.prompt(question.text);
    if (userAnswer === question.correctAnswer) {
      userScore += 10;
    } else {
      console.log("Incorrect");
    }
  }
  window.alert("Your score is: " + userScore);
}

// While loop for an option to play the game again.
while (playAgain === true) {
  playGame();
  let userChoice = window.prompt(
    "Would you like to play again? Answer yes or no."
  );
  if (userChoice === "yes") {
    playAgain = true;
  } else {
    playAgain = false;
    window.alert("Thanks for playing the game!");
  }
}

// console.log(userAnswer);
// console.log(questions[i]);
// console.log(userName);
