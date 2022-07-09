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
let doublecheck = document.getElementById('doubleCheck');

// local storage
inputs[0].value = localStorage.getItem('name');
inputs[1].value = localStorage.getItem('email');
inputs[2].value = localStorage.getItem('phone');
inputs[3].value = localStorage.getItem('date');

// After refresh, the form is being checked
if(checks[0].classList.contains('active') && checks[1].classList.contains('active') && checks[2].classList.contains('active') && checks[3].classList.contains('active')){
    doublecheck.classList.add('active');
    box.innerText= '';
}    
if(localStorage.getItem('name') != null){
    if(!localStorage.getItem('name') === '' || localStorage.getItem('name').length < 2){
        setError(name,0,'Please enter name');
        alertBox.classList.remove('active');
        box.innerText= '1';
        box.classList.add('success');
    }  else{
        setSuccess(name,0);
    }
}   
if(localStorage.getItem('email') != null){ 
    if(localStorage.getItem('email') != '' && localStorage.getItem('email').includes('@redberry.ge')){
        setSuccess(email,1);  
    } else{
        setError(email,1,'Please enter email address');
        alertBox.classList.remove('active');
        box.innerText= '1';
        box.classList.add('success');
    }
}
if(localStorage.getItem('phone') != null){
    if(localStorage.getItem('phone') != '' && !isNaN(localStorage.getItem('phone')) && localStorage.getItem('phone').length == 9){
        setSuccess(phone,2);
    } else {
        setError(phone,2,'Length Must Be 9 Numbers Long');
        alertBox.classList.remove('active');
        box.innerText= '1';
        box.classList.add('success');
    }
}
if(localStorage.getItem('date') != null){
    if(localStorage.getItem('date') === ''){
        setError(date,3,'Please enter date of birth');
        alertBox.classList.remove('active');
        box.innerText= '1';
        box.classList.add('success');
    } else{
        setSuccess(date,3);
    }
}
if(checks[0].classList.contains('active') && checks[1].classList.contains('active') && checks[2].classList.contains('active') && checks[3].classList.contains('active')){
    doublecheck.classList.add('active');
    box.innerText= '';
    box.classList.add('success');
}else{
    doublecheck.classList.remove('active');
}

// //first form submit action
let isValidEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;
    if(!checks[0].classList.contains('active')){
        isValid = false;
    }
    if(!checks[1].classList.contains('active')){
        isValid = false;
    }
    if(!checks[2].classList.contains('active')){
        isValid = false;
    }
    if(!checks[3].classList.contains('active')){
        isValid = false;
    }
    if(isValid){
        location.href ='experienceInfo.html';
    }
}
);

// Inputs validation
inputs[0].addEventListener('blur', e => {
    let alertText = document.getElementById('alert');
    let nameValue = name.value.trim();
    if(nameValue === ''){
        setError(name,0,'Please enter name');
    } else if(name.value.length < 2){
        setError(name,0,'Name must be at least 2 letters');
    } else{
        setSuccess(name,0);
    }
    box.classList.add('success');
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active') && checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= '';
    } else{
        doublecheck.classList.remove('active');
        box.innerText= '1';
    }
    localStorage.setItem('name', inputs[0].value);    
});

inputs[1].addEventListener('blur', e => {
    let emailValue = email.value.trim();
    if(emailValue === ''){
        setError(email,1,'Please enter email address');
    } else if (!isValidEmail(emailValue)) {
        setError(email,1, 'Please enter valid email address');
    } else if(!emailValue.includes('@redberry.ge')){
        setError(email,1, 'Email must include @redberry.ge');
    } else{
        setSuccess(email,1);
    }
    box.classList.add('success');
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active') && checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= '';
    }else{
        doublecheck.classList.remove('active');
        box.innerText= '1';
    }
    localStorage.setItem('email', inputs[1].value);
});
inputs[2].addEventListener('blur', e => {
    let phoneValue = phone.value.trim();
    if(phoneValue === ''){
        setError(phone,2,'Please enter phone number');
    } else if(isNaN(phoneValue)){
        setError(phone,2,'Please enter numbers only');    
    }  else if(phoneValue.length != 9){
        setError(phone,2,'Length Must Be 9 Numbers Long');
    } else{
        setSuccess(phone,2);
    }
    box.classList.add('success')
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active') && checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= '';
    }else{
        doublecheck.classList.remove('active');
        box.innerText= '1';
    }
    localStorage.setItem('phone', inputs[2].value);
});
inputs[3].addEventListener('blur', e => {
    let dateValue = date.value.trim();
    if(dateValue === ''){
        setError(date,3,'Please enter date of birth');
    } else{
        setSuccess(date,3);
    }
    box.classList.add('success');
    if(checks[0].classList.contains('active') && checks[1].classList.contains('active') && checks[2].classList.contains('active') && checks[3].classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= '';
    }else{
        doublecheck.classList.remove('active');
        box.innerText= '1';
    }
    localStorage.setItem('date', inputs[3].value);
});
nextBtn.addEventListener('click',() =>{
    if(!doublecheck.classList.contains('active')){
        alertBox.classList.add('active');
        alertText.innerHTML = 'Fill Inputs Correctly';
        box.innerText= '1';
    }
})
closeBtn.addEventListener('click',() =>{
    alertBox.classList.remove('active');
})

// functions declaration
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

