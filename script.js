const evenBtn = document.getElementById("evenBtn");
const oddBtn = document.getElementById("oddBtn");
const diceValue = document.getElementById("diceValue");
const judge = document.getElementById("judge");
const message = document.getElementById("message");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");

let winCount = 0;
let loseCount = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function play(userGuess) {
  const value = rollDice();
  const result = value % 2 === 0 ? "偶数" : "奇数";
  const isWin = userGuess === result;

  diceValue.textContent = String(value);
  judge.textContent = result;

  if (isWin) {
    winCount += 1;
    message.textContent = "正解！おめでとう！";
  } else {
    loseCount += 1;
    message.textContent = "残念！もう一回挑戦しよう。";
  }

  wins.textContent = String(winCount);
  losses.textContent = String(loseCount);
}

evenBtn.addEventListener("click", () => play("偶数"));
oddBtn.addEventListener("click", () => play("奇数"));
