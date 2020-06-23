'use strict';

const body = document.querySelector('body'),
    colorTitle = document.querySelector('.color-title'),
    colorBtn = document.querySelector('.color-btn');

const randomNum = () => {
    return (Math.floor(Math.random() * 255).toString(16));
};

const randColor = () => {
    let randomColor = '';
    for(let i = 0; i < 3; i++) {
        randomColor += randomNum();
    }
    colorTitle.textContent = `#${randomColor}`;
    body.style.backgroundColor = `#${randomColor}`;
};

randColor();

colorBtn.addEventListener('click', randColor);