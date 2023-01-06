'use strict';
const filterBtn = document.querySelector('.show-filter');
const filterContainer = document.querySelector('.filter-container-main');

filterBtn.addEventListener('click', function () {
  filterContainer.classList.toggle('displayNone');
  if (!filterContainer.classList.contains('displayNone'))
    filterBtn.textContent = 'Hide filter';
  else filterBtn.textContent = 'Show filter';
});
