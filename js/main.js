'use strict';

const body = document.querySelector('body'),
    colorTitle = document.querySelector('.color-title'),
    colorBtn = document.querySelector('.color-btn');

const randomNum = (max, min) => {
    max = Math.floor(max);
    min = Math.ceil(min);
    return (Math.floor(Math.random() * (max-min)) + min).toString(16);
};

const randColor = () => {
    let randomColor = '';
    for(let i = 0; i < 3; i++) {
        randomColor += randomNum(255, 0);
    }
    colorTitle.textContent = `#${randomColor}`;
    body.style.backgroundColor = `#${randomColor}`;
};

randColor();

colorBtn.addEventListener('click', randColor);