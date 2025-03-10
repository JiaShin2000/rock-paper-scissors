let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerInput = Math.random();
  let computerChoice;

  if (computerInput <= 0.3) {
    computerChoice = "rock";
  } else if (computerInput <= 0.6) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanInput = prompt("Pick one (rock, paper, scissors)").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(humanInput)) {
    humanInput = prompt(
      "Invalid choice! Pick one (rock, paper, scissors)"
    ).toLowerCase();
  }
  return humanInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  let round = 1;

  while (round <= 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(`Round ${round}`);
    console.log(
      `Player choice: ${humanSelection}, Computer choice: ${computerSelection}`
    );

    let result = playRound(humanSelection, computerSelection);
    console.log(result);
    console.log(`Scores - Player: ${humanScore}, Computer: ${computerScore}`);

    round++;
  }

  console.log("\nFinal Scores:");
  console.log(`Player: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (humanScore < computerScore) {
    console.log("💀 You lost the game!");
  } else {
    console.log("😐 It's a tie!");
  }
}

playGame();
