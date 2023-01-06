'use strict';

// selecting elements
const membershipMethod = document.querySelectorAll('#membershipMethod');
const cardMethod = document.querySelectorAll('#cardMethod');
const accountMethod = document.querySelectorAll('#accountMethod');
const membershipForm = document.getElementById('membershipForm');
const cardForm = document.getElementById('cardForm');
const accountForm = document.getElementById('accountForm');
const questions = document.querySelectorAll('.question');

// main code
cardMethod.forEach(function (mehtod) {
  mehtod.addEventListener('click', function () {
    cardForm.classList.remove('hidden-p');
    accountForm.classList.add('hidden-p');
    membershipForm.classList.add('hidden-p');

    membershipMethod.forEach(method =>
      method.classList.remove('active-method')
    );
    cardMethod.forEach(method => method.classList.add('active-method'));
    accountMethod.forEach(method => method.classList.remove('active-method'));
  });
});
accountMethod.forEach(function (method) {
  method.addEventListener('click', function () {
    cardForm.classList.add('hidden-p');
    accountForm.classList.remove('hidden-p');
    membershipForm.classList.add('hidden-p');

    membershipMethod.forEach(method =>
      method.classList.remove('active-method')
    );
    cardMethod.forEach(method => method.classList.remove('active-method'));
    accountMethod.forEach(method => method.classList.add('active-method'));
  });
});
membershipMethod.forEach(function (method) {
  method.addEventListener('click', function () {
    cardForm.classList.add('hidden-p');
    accountForm.classList.add('hidden-p');
    membershipForm.classList.remove('hidden-p');

    membershipMethod.forEach(method => method.classList.add('active-method'));
    cardMethod.forEach(method => method.classList.remove('active-method'));
    accountMethod.forEach(method => method.classList.remove('active-method'));
  });
});

questions.forEach(function (question) {
  question.addEventListener('click', function () {
    const parentElement = this.parentElement;
    parentElement.classList.toggle('passive-q');
  });
});
