let computerChoice;
function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 1) {
    computerChoice = "Bat";
  } else if (randomNumber == 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
}
