import './style.css';

const newGame = {
  name: 'Sky Force',
};

console.log(JSON.stringify(newGame));

async function createGame() {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body:
      JSON.stringify(newGame),

  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
createGame();