
"use strict";

function header(){

    const burgerButton = document.querySelector('.header__burger')
    const headerMenu = document.querySelector('.header__nav')

    burgerButton.addEventListener('click', ()=>{
        burgerButton.classList.toggle('active')
        headerMenu.classList.toggle('active')
    })

}header()