let gameId = null;
const createGame = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body:
      JSON.stringify({
        name: 'Sky Force',
      }),

})
  .then((res) => res.json())
  .then((res) => {
    [,,, gameId] = res.result.split(' ');
  });

const addScore = (userName, userScore) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body:
      JSON.stringify({
        user: userName,
        score: userScore,
      }),
  })
  .then((res) => res.json());

const listScores = () => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`)
  .then((res) => res.json());

export default { createGame, addScore, listScores };