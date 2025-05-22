let scores = [0, 0];
let history = [];

function updateScore(team, points) {
  const teamNameInput = document.getElementById(`team${team}Name`).value.trim();
  const teamName = teamNameInput || `Komanda ${team}`;
  if (team !== 1 && team !== 2) return;

  scores[team - 1] += points;
  if (scores[team - 1] < 0) scores[team - 1] = 0;

  document.getElementById(`score${team}`).innerText = scores[team - 1];
  document.getElementById(`team${team}Display`).innerText = teamName;

  // Saglabājam vēsturē
  history.push(`${teamName} ${points > 0 ? 'ieguva' : 'zaudēja'} ${Math.abs(points)} punktu(s)`);

  // Saglabājam localStorage
  localStorage.setItem('scoreHistory', JSON.stringify(history));
}

function goToHistory() {
  window.location.href = "history.html";
}
