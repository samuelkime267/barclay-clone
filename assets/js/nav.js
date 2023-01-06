'use strict';
const header = document.querySelector('header');
const logoText = document.querySelector('.logoText');
const navLinkInNav = document.querySelector('.navLinkInNav');
const navLinkAfterNav = document.querySelector('.navLinkAfterNav');
const navTextToHide = document.querySelectorAll('.navTextToHide');
const more = document.querySelector('.more');
const mainVavLinks = document.querySelector('.main-nav-links');

// elements for mobile nav
const mobileNavContainer = document.querySelector('.mobileNavContainer');
const NavContainerUl = document.querySelector('.NavContainerUl');
const menuBtn = document.querySelector('.menuBtn');
const searchBtn = document.querySelector('.searchBtn');
const searchContainer = document.querySelector('.searchContainer');
const cancelBtn = document.querySelector('.cancel-btn');
const headerLink = document.querySelectorAll('.headerLink');
const mobileLinkContainer = document.querySelectorAll('.mobileLinkContainer');
const mobileLinkTitle = document.querySelectorAll('.mobileLinkTitle');

// codes
searchBtn.addEventListener('click', function () {
  searchContainer.classList.toggle('displayNone');
});
cancelBtn.addEventListener('click', function (e) {
  e.preventDefault();
  searchContainer.classList.add('displayNone');
});

// mobile nav
mobileLinkTitle.forEach(function (header, i) {
  header.addEventListener('click', function () {
    const linkA = header.parentElement.querySelector('.link-a');
    linkA.classList.toggle('NavNoneMobile');
  });
});
headerLink.forEach(function (head, i) {
  head.addEventListener('click', function () {
    mobileLinkContainer[i].classList.toggle('NavNoneMobile');
  });
});
menuBtn.addEventListener('click', function () {
  mobileNavContainer.classList.toggle('NavNoneMobile');
});

// scroll events
let CurrentPosition = window.scrollY;
window.addEventListener('scroll', function () {
  if (CurrentPosition > window.scrollY) {
    // up
    header.classList.remove('nav-hidden');
    logoText.classList.remove('logo-hidden');
    navTextToHide.forEach(text => text.classList.remove('text-hidden'));
    navLinkInNav.classList.add('displayNone');
    navLinkAfterNav.classList.remove('displayNone');
    mainVavLinks.classList.remove('displayNone');
  } else {
    // down
    header.classList.add('nav-hidden');
    logoText.classList.add('logo-hidden');
    navTextToHide.forEach(text => text.classList.add('text-hidden'));
    navLinkInNav.classList.remove('displayNone');
    if (window.innerWidth > 786) {
      navLinkAfterNav.classList.add('displayNone');
      mainVavLinks.classList.add('displayNone');
    }
  }
  CurrentPosition = window.scrollY;
});
