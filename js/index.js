'use strict';

let burger = document.querySelector('#burger'),
    menu = document.querySelector('#menu'),
    body = document.querySelector('body'),
    menuItems = document.querySelectorAll('.menu__item');

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    this.classList.toggle('close');
});

for (let menuItem of menuItems) {
    menuItem.addEventListener('click', function () {
        menu.classList.remove('active');
        body.classList.remove('lock');
        burger.classList.remove('close');
    });
}



let player = new Plyr('#player');
