let mybutton = document.querySelectorAll(".mybutton");
let player;
let computer;

mybutton.forEach((event) =>
  event.addEventListener("click", () => {
    player = event.textContent;
    computerTurn();
    let result = checkWinner();
    document.getElementById("myPlayer").innerHTML = `Player : ${player}`;
    document.getElementById("myComputer").innerHTML = `Computer : ${computer}`;
    document.getElementById("myResult").innerHTML = result;
  })
);

function computerTurn() {
  const randomNum = Math.floor(Math.random() * 3 + 1);

  switch (randomNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player == computer) return "Draw 🤷‍♀️!!";
  else if (computer == "Rock")
    return player == "Paper" ? "You Win ✌️!!" : "You lose 😒 !!";
  else if (computer == "Paper")
    return player == "Scissors" ? "You Win ✌️!!" : "You lose 😒 !!";
  else if (computer == "Scissors")
    return player == "Rock" ? "You Win ✌️!!" : "You lose 😒 !!";
}
