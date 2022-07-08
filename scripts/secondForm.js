// second form script

let selectMenu = document.querySelector('.selectMenu');
let selectBtn = document.querySelector('.selectBtn');
let selectBtnT = document.querySelector('.selectBtnT');
let arrowDown = document.querySelector('.arrowDown');
let option = document.querySelectorAll('.option');
let options = document.querySelector('.options');
let form = document.getElementById('secondForm');
let check = document.querySelector('.secondBlock')
let radioBtns = document.getElementsByName('yes/no') 



form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(localStorage.getItem('email'));
    let isValid = true;
    if(selectBtnT.innerText == 'level of knowledge' || secondSelectBtnT.innerText == 'Choose your character'){
        isValid = false;
    } 
    if(!radioBtns[0].checked && !radioBtns[1].checked){
        isValid = false
    }
    if(isValid){
        let formData = {
            experience_level: selectBtnT.innerHTML,
            character_id: secondSelectBtnT.getAttribute('id'),
            already_participated: radioBtns[0].checked
        };
        console.log(formData);
        // location.href ='endPage.html'
    }
    
});


option.forEach((option) =>{
    option.addEventListener('click', () =>{
        let text = option.innerText;
        selectBtnT.innerText = option.innerText;
        options.classList.toggle('active');
        arrowDown.classList.toggle('rotate2');
        arrowDown.classList.toggle('rotate');
        check.classList.add('success')
    })
})
selectBtn.addEventListener('click', () =>{
    options.classList.toggle('active');
    arrowDown.classList.toggle('rotate2');
    arrowDown.classList.toggle('rotate');

})




let secondSelectMenu = document.querySelector('.secondSelectMenu');
let secondSelectBtn = document.querySelector('.secondSelectBtn');
let secondSelectBtnT = document.querySelector('.secondSelectBtnT');
let secondArrowDown = document.querySelector('.secondArrowDown');
let secondOptions = document.querySelector('.secondOptions')
let total = document.querySelector('.total');
let nextBtn = document.querySelector('#secondNextBtn');

const Http = new XMLHttpRequest();
const url=  'https://chess-tournament-api.devtest.ge/api/grandmasters';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    if (Http.readyState == 4 && Http.status == 200) {
        let x = JSON.parse(Http.responseText)
        for(let i =0 ; i < x.length; i++){
            let li = document.createElement('li');
            let img = document.createElement('img');
            li.classList.add('secondOption','flex');
            li.innerHTML = x[i].name;
            li.setAttribute('id',x[i].id)
            console.log(x[i]);
            img.classList.add('masterPhoto');
            img.setAttribute('alt','character')
            img.setAttribute('src','https://chess-tournament-api.devtest.ge'+ x[i].image);
            total.innerText = '(Total'+(i + 1)+')'
            secondOptions.appendChild(li);
            li.appendChild(img);
        }
        let other = document.createElement('li')
        other.classList.add('secondOption','flex');
        other.innerHTML = 'Other <img class="masterPhoto" alt="def" src="https://www.roomlets.rentals/templates/default_theme/img/person.jpg"     >'
        secondOptions.appendChild(other);
        secondOptions.childNodes.forEach((option) =>{
            option.addEventListener('click', () =>{
                let text = option.innerText;
                secondSelectBtnT.innerText = option.innerText;
                secondSelectBtnT.setAttribute('id', option.getAttribute('id'))
                secondOptions.classList.toggle('active');
                secondArrowDown.classList.toggle('rotate2');
                secondArrowDown.classList.toggle('rotate');
            })
        })
    }
}




secondSelectBtn.addEventListener('click', () =>{
    secondOptions.classList.toggle('active');
    secondArrowDown.classList.toggle('rotate2');
    secondArrowDown.classList.toggle('rotate');
})




