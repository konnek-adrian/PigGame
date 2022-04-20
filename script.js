'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current1--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0; //switching the player
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
};
//Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer =0;
let playing = true;


//Functionality of rolling the dice
// random number between 1 and 6
btnRoll.addEventListener('click', function ()  {
    if(playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display the result
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

//  check for rolled 1
if(dice !== 1){
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}
else {
  switchPlayer();
}}
});


btnHold.addEventListener('click', function () {
    //adding the current score to the TOTAL score
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

// checking the result >= 50
if (scores[activePlayer] >= 50) {
    //display winner
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    // document.getElementById(`name--${activePlayer}`).textContent = WINNER;   POPRAWIĆ TO
//switching player

}else {
    switchPlayer();
};
}
});

btnNew.addEventListener('click', function () {
    //reset the game
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.remove('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    diceEl.classList.add('hidden');
});