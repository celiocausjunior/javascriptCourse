'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // you can use  -> document.getElementbyId('score--0')
const score1El = document.querySelector('#score--1'); // you can use  -> document.getElementbyId('score--1')
const current0El = document.getElementById('current--0'); //you can use  -> document.querySelector('#current--0')
const current1El = document.getElementById('current--1'); //you can use  -> document.querySelector('#current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// initial variables
let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const incrementActivePlayerScore = function () {
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}

const switchPlayer = function () {
    incrementActivePlayerScore();
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const initGame = function(){
        scores = [0, 0]
        currentScore = 0;
        activePlayer = 0;
        playing = true;
        diceEl.classList.add('hidden');
    
        for (let i = 0; i < scores.length; i++) {
            document.querySelector(`.player--${i}`).classList.remove('player--winner');
            document.querySelector(`.player--${i}`).classList.add('player--active');
            document.getElementById(`score--${i}`).textContent = 0;
            document.getElementById(`current--${i}`).textContent = 0;
        }
}

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Checkfor rolled 1: If true 
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            incrementActivePlayerScore();

        } else {
            //switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. Check if player's score is >= 50
        // Finish the game
        if (scores[activePlayer] >= 50) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //Switch to the next player
            switchPlayer();
        }
    };
});

btnNew.addEventListener('click', initGame);
