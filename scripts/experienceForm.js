// second form script
const REDBERRY_URL = "https://chess-tournament-api.devtest.ge";

// experience-level variables
let selectMenu = document.querySelector('.selectMenu');
let selectBtn = document.querySelector('.selectBtn');
let selectBtnText = document.querySelector('.selectBtnText');
let arrowDown = document.querySelector('.arrowDown');
let optionsParent = document.querySelectorAll('.option');
let options = document.querySelector('.options');
let form = document.getElementById('secondForm');
let check = document.querySelector('.secondBlock');
let radioBtns = document.getElementsByName('yes/no') ;
// character-id variables
let secondselectBtnText = document.querySelector('.secondSelectBtnText');
let secondSelectMenu = document.querySelector('.secondSelectMenu');
let secondSelectBtn = document.querySelector('.secondSelectBtn');
let secondArrowDown = document.querySelector('.secondArrowDown');
let secondOptions = document.querySelector('.secondOptions');
let total = document.querySelector('.total');
let nextBtn = document.querySelector('#secondNextBtn');


// After refresh, the form is being checked
if(localStorage.getItem('experience_level') != null){
    selectBtnText.innerText = localStorage.getItem('experience_level');
} else {
    selectBtnText.innerHTML == 'level of knowledge<span class="red">*</span>';
}
if(localStorage.getItem('character_idText') != null){
    secondselectBtnText.innerText = localStorage.getItem('character_idText');
} else{
    secondselectBtnText.innerHTML == 'Choose your character<span class="red">*</span>';
}

if(localStorage.getItem('already_participated0') === 'true'){
    radioBtns[0].checked = true;
    radioBtns[1].checked = false;
} else {
    radioBtns[0].checked = false;
    radioBtns[1].checked = true;
}
if(localStorage.getItem('already_participated0') == null){
    radioBtns[1].checked = false;   
    radioBtns[0].checked = false;
}
radioBtns[0].addEventListener('click', () => {
    localStorage.setItem('already_participated0', radioBtns[0].checked);
    localStorage.setItem('already_participated1', radioBtns[1].checked);
})
radioBtns[1].addEventListener('click', () => {
    localStorage.setItem('already_participated0', radioBtns[0].checked);
    localStorage.setItem('already_participated1', radioBtns[1].checked);
})

// Form submit action and send formdata
form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;
    if(selectBtnText.innerHTML == 'level of knowledge<span class="red">*</span>' || secondselectBtnText.innerHTML == 'Choose your character<span class="red">*</span>'){
        isValid = false;
    } 
    if(!radioBtns[0].checked && !radioBtns[1].checked){
        isValid = false;
    }
    if(isValid){
        let formData = {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            date_of_birth: localStorage.getItem('date'),
            experience_level: localStorage.getItem('experience_level'),
            already_participated: radioBtns[0].checked,
            character_id: Number(localStorage.getItem('character_id'))
        };
        console.log(formData);
        fetch(`${REDBERRY_URL}/api/register`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          }).then(response => {
                console.log(response);
                // localStorage.clear();
                // location.href ='onboardingCompleted.html';
          })
          .catch((error) => {
            console.log('Error:', error)
          })
    }
});

// select input functional
optionsParent.forEach((select) =>{
    select.addEventListener('click', () =>{
        let text = select.innerText;
        selectBtnText.innerText = select.innerText;
        localStorage.setItem('experience_level', selectBtnText.innerText);
        options.classList.toggle('active');
        arrowDown.classList.toggle('rotate2');
        arrowDown.classList.toggle('rotate');
        check.classList.add('success');
    })
})
selectBtn.addEventListener('click', () =>{
    options.classList.toggle('active');
    arrowDown.classList.toggle('rotate2');
    arrowDown.classList.toggle('rotate');
})
secondSelectBtn.addEventListener('click', () =>{
    secondOptions.classList.toggle('active');
    secondArrowDown.classList.toggle('rotate2');
    secondArrowDown.classList.toggle('rotate');
})

// Get information from API
const Http = new XMLHttpRequest();
const url=  'https://chess-tournament-api.devtest.ge/api/grandmasters';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
    if (Http.readyState == 4 && Http.status == 200) {
        let request = JSON.parse(Http.responseText)
        for(let i =0 ; i < request.length; i++){
            let li = document.createElement('li');
            let img = document.createElement('img');
            li.classList.add('secondOption','flex');
            li.innerHTML = request[i].name;
            li.setAttribute('id',request[i].id);
            img.classList.add('masterPhoto');
            img.setAttribute('alt','character');
            img.setAttribute('src','https://chess-tournament-api.devtest.ge'+ request[i].image);
            total.innerText = '(Total'+(i + 1)+')';
            secondOptions.appendChild(li);
            li.appendChild(img);
        }
        secondOptions.childNodes.forEach((child) =>{
            child.addEventListener('click', () =>{
                let text = child.innerText;
                secondselectBtnText.innerText = child.innerText;
                secondselectBtnText.setAttribute('id', child.getAttribute('id'));
                localStorage.setItem('character_idText', secondselectBtnText.innerText);
                localStorage.setItem('character_id', secondselectBtnText.getAttribute('id'));
                secondOptions.classList.toggle('active');
                secondArrowDown.classList.toggle('rotate2');
                secondArrowDown.classList.toggle('rotate');
            })
        })
    }
}