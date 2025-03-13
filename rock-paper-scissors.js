const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

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

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  let message = "";

  if (humanChoice === computerChoice) {
    return "Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
  } else {
    computerScore++;
    message = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
  }

  result.innerHTML = `Player: ${humanScore} | Computer: ${computerScore}\n<p>${message}</p>`;

  //Check if anyone reached 5 points
  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function announceWinner() {
  gameOver = true;

  let finalMessage =
    humanScore === 5 ? "🎉 You won the game!" : "💀 You lost the game!";

  result.innerHTML = `<h2>Final Scores</h2>
                      <p>Player: ${humanScore} | Computer: ${computerScore}</p>
                      <p>${finalMessage}</p>`;

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Game";
  restartBtn.classList.add("restart-button");
  result.classList.add("end-game-box");
  restartBtn.addEventListener("click", resetGame);
  result.appendChild(restartBtn);
}

function resetGame() {
  document.querySelector(".result").classList.remove("end-game-box");

  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  result.innerHTML = "";

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
