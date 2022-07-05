// second form script

let selectMenu = document.querySelector('.selectMenu');
let selectBtn = document.querySelector('.selectBtn');
let selectBtnT = document.querySelector('.selectBtnT');
let arrowDown = document.querySelector('.arrowDown');
let option = document.querySelectorAll('.option');
let options = document.querySelector('.options')

option.forEach((option) =>{
    option.addEventListener('click', () =>{
        let text = option.innerText;
        selectBtnT.innerText = option.innerText;
        options.classList.toggle('active');
        arrowDown.classList.toggle('rotate2');
        arrowDown.classList.toggle('rotate');
    })
})
selectBtn.addEventListener('click', () =>{
    options.classList.toggle('active');
    arrowDown.classList.toggle('rotate2');
    arrowDown.classList.toggle('rotate');
})