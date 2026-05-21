const evenBtn = document.getElementById("evenBtn");
const oddBtn = document.getElementById("oddBtn");
const diceValue = document.getElementById("diceValue");
const judge = document.getElementById("judge");
const message = document.getElementById("message");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const diceFace = document.getElementById("diceFace");

let winCount = 0;
let loseCount = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function renderDiceFace(value) {
  diceFace.innerHTML = "";

  const visibleGridIndexesByValue = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
  };

  const pipGridPositions = [1, 3, 5, 7, 9, 4, 6];
  const visibleGridIndexes = visibleGridIndexesByValue[value] || [];

  pipGridPositions.forEach((gridIndex) => {
    const pip = document.createElement("span");
    pip.className = "pip";
    if (!visibleGridIndexes.includes(gridIndex)) {
      pip.style.opacity = "0";
    }
    pip.style.gridArea = String(gridIndex);
    diceFace.appendChild(pip);
  });

  diceFace.dataset.value = String(value);
  diceFace.setAttribute("aria-label", `サイコロの目: ${value}`);
}

function play(userGuess) {
  const value = rollDice();
  const result = value % 2 === 0 ? "偶数" : "奇数";
  const isWin = userGuess === result;

  renderDiceFace(value);
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

renderDiceFace(1);

evenBtn.addEventListener("click", () => play("偶数"));
oddBtn.addEventListener("click", () => play("奇数"));
