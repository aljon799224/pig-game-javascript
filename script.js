'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


// buttons
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceImg.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();


const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1: 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function() {
  if (playing) {

    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove('hidden');
    diceImg.scr = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {

      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {

      switchPlayer();

    }
  
  }
  
});

btnHold.addEventListener('click', function () {
  if (playing) {

    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >=100) {

      playing = false;
      diceImg.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {

      switchPlayer()

    }
    
  }
});

btnNew.addEventListener('click', init);