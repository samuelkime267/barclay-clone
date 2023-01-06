'use strict';
// selecting elements
const smartLinksContainer = document.querySelectorAll('.smart-links');
smartLinksContainer.forEach(container => {
  container.addEventListener('click', function (e) {
    const title = e.target;
    if (title.classList.contains('title-link')) {
      e.preventDefault();
      title.nextElementSibling.classList.toggle('displayNone');
      title.querySelector('.i-link').classList.toggle('rotate');
    } else if (title.classList.contains('i-link')) {
      e.preventDefault();
      const titleMain = title.closest('.title-link');
      titleMain.nextElementSibling.classList.toggle('displayNone');
      titleMain.querySelector('.i-link').classList.toggle('rotate');
    }
  });
});

// dropDown
const dropContainer = document.querySelector('.dropDown-container');
const activeDrop = document.querySelector('.active-drop');
const p = activeDrop.querySelector('p');
const dropOptions = document.querySelector('.drop-options');

// code
const classToggle = function () {
  activeDrop.classList.toggle('border-b-gray');
  dropOptions.classList.toggle('heightNone');
  dropI.classList.toggle('rotate');
};

const dropI = document.querySelector('.drop-i');
dropContainer.addEventListener('click', function (e) {
  const dropText = e.target;
  if (dropText.classList.contains('option-drop-text')) {
    const value = dropText.textContent;
    p.textContent = value;
    classToggle();
  }
});

activeDrop.addEventListener('click', function () {
  classToggle();
});
