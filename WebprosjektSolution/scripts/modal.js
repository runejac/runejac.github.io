//Importing HTML elements
const modalBtn = document.querySelector('#modal-btn');
const modalBckgrnd = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalCloseId = document.querySelector('#add-btn');
const newModal = document.getElementById('modal-2');
const modalBckgrnd2 = document.getElementById('modal-background2');

//When button is pressed, modal one appears
modalBtn.addEventListener('mousedown', () => {
    modal.classList.add('is-active');
});

//Remove modal when background or 'X' upper right is clicked.
modalBckgrnd.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

//When button is clicked, remove modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

//When button is clicked, remove modal
modalCloseId.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
//End of modal one

//Modal 2, when background clicked return to main site
modalBckgrnd2.addEventListener('click', () => {
    newModal.classList.remove('is-active');
});