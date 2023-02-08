"use strict"

const reserved = document.querySelector('.header__btn'),
      overlay = document.querySelector('.overlay'),
      closeElem = document.querySelector('.modal__close'),
      hamburger = document.querySelector('.hamburger'),
      openMenu = document.querySelector('.menu-modal__open'),
      closeMenu = document.querySelector('.menu-modal__close'),
      reservedMenu = document.querySelector('.menu-modal__btn');

reserved.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    overlay.classList.remove('active');
})

hamburger.addEventListener('click', () => {
    openMenu.classList.add('active');
});

closeMenu.addEventListener('click', () =>{
    openMenu.classList.remove('active');
});

reservedMenu.addEventListener('click', () => {
    openMenu.classList.remove('active');
    overlay.classList.add('active');
});