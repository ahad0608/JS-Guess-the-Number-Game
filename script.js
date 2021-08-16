'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';



})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (guess > 20 || guess < 0) {
        document.querySelector('.message').textContent = "Enter Number Between 1 and 20";
    }

    else {
        if (!guess) {

            document.querySelector('.message').textContent = 'No Number!';
        }
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('.number').textContent = secretNumber;
            if (score > highscore) {
                document.querySelector('.highscore').textContent = score;
                highscore = score;
            }
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';




        }
        else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "You lost the Game";
                document.querySelector('.score').textContent = 0;
            }
        }


    }

})