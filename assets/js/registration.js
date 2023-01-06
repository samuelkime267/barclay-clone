'use strict';

// selecting elements
const showInfoBtn = document.querySelectorAll('.show-details');
const showInfoBtnSp = document.querySelector('.show-detailSp');
const nextFormBtn = document.querySelectorAll('.next-form-btn');
const prevFormBtn = document.querySelectorAll('.prev-form-btn');
const progress = document.querySelectorAll('.progress-number-holder');

// main code
showInfoBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const children = this.parentElement.parentElement.children;
    children[1].firstElementChild.classList.toggle('hidden-p');
  });
});
showInfoBtnSp.addEventListener('click', function (e) {
  e.preventDefault();
  const children = this.parentElement.parentElement.children;
  children[2].firstElementChild.classList.toggle('hidden-p');
});

// switching form
let i = 0;
nextFormBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const parentElement = this.parentElement.parentElement;
    parentElement.classList.add('hidden-p');
    parentElement.nextElementSibling.classList.remove('hidden-p');
    window.scrollTo(0, 64);
    i++;
    progress[i].classList.add('active');
  });
});
prevFormBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const parentElement = this.parentElement.parentElement;
    parentElement.classList.add('hidden-p');
    parentElement.previousElementSibling.classList.remove('hidden-p');
    window.scrollTo(0, 64);
    progress[i].classList.remove('active');
    i--;
  });
});
