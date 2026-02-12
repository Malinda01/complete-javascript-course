'use strict';
// Store into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Close Modal Function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Modal Function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Open pop up
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// close btn inside modal
btnCloseModal.addEventListener('click', closeModal);

// Close button by clicking on outside the popup
overlay.addEventListener('click', closeModal);

// keyboard
document.addEventListener('keydown', function (e) {
  //   console.log('A key was pressed');
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
