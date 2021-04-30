'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
        // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⚠️ ☢️ Digite um número!';

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '👍🏼 😎 Acertou!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Muito alto!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Você perdeu! 😖 ";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';

        }

        // when guess is to low
    } else {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Muito baixo';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Você perdeu! 😖 ";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';


        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    console.log( secretNumber = Math.trunc(Math.random() * 20) + 1);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Tente adivinhar..."
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';


});