
// variables
let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
let box = document.getElementById('firstBlock');
let checks = document.querySelectorAll('.check');
let inputs = document.querySelectorAll('.firstFormInput');
let alertBox = document.getElementById('alertBox');
let closeBtn = document.getElementById('alertX');
let nextBtn = document.getElementById('nextBtn');
let doublecheck = document.getElementById('doubleCheck')

//first form script
let isValidEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', e => {
    e.preventDefault();
});


closeBtn.addEventListener('click',() =>{
    alertBox.classList.remove('active');
})

inputs[0].addEventListener('blur', e => {
    let alertText = document.getElementById('alert');
    let nameValue = name.value.trim();
    if(nameValue === ''){
        setError(name,0,'Please enter name');
    } else{
        setSuccess(name,0);
    }
    box.classList.add('success');
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active')&&
    checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        nextBtn.setAttribute('onclick', "location.href ='secondForm.html'");
        box.innerText= ''
        doublecheck.classList.add('active');
    } else{
        box.innerText= '1'
        doublecheck.classList.remove('active');
    }
});

inputs[1].addEventListener('blur', e => {
    let emailValue = email.value.trim();
    if(emailValue === ''){
        setError(email,1,'Please enter email address');
    } else if (!isValidEmail(emailValue)) {
        setError(email,1, 'Please enter valid email address');
    } else{
        setSuccess(email,1);
    }
    box.classList.add('success');
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active')&&
    checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        nextBtn.setAttribute('onclick', "location.href ='secondForm.html'");
        box.innerText= ''
        doublecheck.classList.add('active');
    } else{
        box.innerText= '1'
        doublecheck.classList.remove('active');
    }
});
inputs[2].addEventListener('blur', e => {
    let phoneValue = phone.value.trim();
    if(phoneValue === ''){
        setError(phone,2,'Please enter phone number');
    } else if(isNaN(phoneValue)){
        setError(phone,2,'Please enter numbers only');
    }   else{
        setSuccess(phone,2);
    }
    box.classList.add('success')
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active')&&
    checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        nextBtn.setAttribute('onclick', "location.href ='secondForm.html'");
        box.innerText= ''
        doublecheck.classList.add('active');
    } else{
        box.innerText= '1'
        doublecheck.classList.remove('active');
    }
});
inputs[3].addEventListener('blur', e => {
    let dateValue = date.value.trim();
    if(dateValue === ''){
        setError(date,3,'Please enter date of birth');
    } else{
        setSuccess(date,3);
    }
    box.classList.add('success');
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active')&&
    checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        nextBtn.setAttribute('onclick', "location.href ='secondForm.html'");
        box.innerText= ''
        doublecheck.classList.add('active');
    } else{
        box.innerText= '1'
        doublecheck.classList.remove('active');
    }
});

function setError(element,num,message){
    element.classList.add('error');
    element.classList.remove('success');
    checks[num].classList.remove('active');
    alertBox.classList.add('active');
    alertText.innerHTML = message;
}

function setSuccess(element,num){
    element.classList.remove('error');
    element.classList.add('success');
    checks[num].classList.add('active');
    alertBox.classList.remove('active');
}

if(checks[0].classList.contains('active') && checks[1].classList.contains('active')&&
checks[2].classList.contains('active') && checks[3].classList.contains('active')){
    console.log('dasd');
}

if(checks[0].classList.contains('active')){
    console.log('ads');
}

console.log(checks[0].classList.contains('active'));


// second form script