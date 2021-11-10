import './style.css';
import leaderboard from './apiHandler';

async function createNewGame() {
  await leaderboard.createGame();
}
createNewGame();

document.getElementById('refresh').addEventListener('click', async () => {
  const ul = document.getElementById('ul');
  const scores = await leaderboard.listScores();
  const res = scores.result;
  ul.innerHTML = '';
  for (let i = 0; i < res.length; i += 1) {
    ul.innerHTML += `<li> ${res[i].user} : ${res[i].score}
    ;</li>`;
  }
});

document.getElementById('submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const success = document.getElementById('success');
  const userName = document.getElementById('userName');
  const userScore = document.getElementById('userScore');
  const userscoreint = parseInt(userScore.value, 10);
  if (userName.value !== '' && userscoreint !== '' && userscoreint) {
    await leaderboard.addScore(userName.value, userScore.value);
    success.innerHTML = 'Your score has been added';
    setTimeout(() => {
      success.innerHTML = '';
      userName.value = '';
      userScore.value = '';
    }, 1500);
  } else {
    success.innerHTML = 'Username and userscore should be vailid, please try again';
    setTimeout(() => {
      success.innerHTML = '';
      userName.value = '';
      userScore.value = '';
    }, 1500);
  }
});
