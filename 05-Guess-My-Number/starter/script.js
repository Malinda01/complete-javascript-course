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
const highscore = 0;

// Function to Click button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No Input state
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When player wins
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = number;

    // greater than secret
  } else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too High!!';
    } else {
      document.querySelector('.message').textContent = 'You lost';
    }
    // less than secret
  } else if (guess < number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too Low!!';
    } else {
      document.querySelector('.message').textContent = 'You lost';
    }
  }
});

// Function to reload the page
document.querySelector('.again').addEventListener('click', function () {
  // function to reload
  window.location.reload();
});
