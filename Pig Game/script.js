'use strict';

const score1 = document.getElementById('score--1');
const score0 = document.getElementById('score--0');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

const newGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

const switchClear = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
newGame();
btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const random = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${random}.png`;

    // 3. Check for rolled 1
    if (random !== 1) {
      // Add dice to current score
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchClear();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      // Finish the game
      playing = false;
      dice.classList.add('hidden');
      console.log(scores[activePlayer]);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchClear();
    }
  }
});
