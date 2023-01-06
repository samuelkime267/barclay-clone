'use strict';
// elements
const qaContainer = document.querySelectorAll('.qa-container');

// active-question

qaContainer.forEach(container => {
  container.addEventListener('click', function (e) {
    const question = e.target.closest('.question');
    if (question) {
      const qa = question.closest('.qa');
      const icon = qa.querySelector('.fa-chevron-right');
      const answer = qa.querySelector('.answer');
      answer.classList.toggle('hidden');
      icon.classList.toggle('active-question');
    }
  });
});

// code
