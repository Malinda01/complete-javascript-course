'use strict';
/*
console.log(document.querySelector('.message').textContent); // Because of a class
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 36;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to Click button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // No Input state
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } else if (guess == number) {
    // When player wins
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = number;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== number) {
    // When guess is wrong
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too High!!' : 'Too Low!';
      displayMessage(guess > number ? 'Too High!!' : 'Too Low!');
    } else {
      displayMessage('You Lost');
    }
  }
});

// Function to reload the page
document.querySelector('.again').addEventListener('click', function () {
  // function to reload
  // window.location.reload();
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing....');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
