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


inputs[0].value = localStorage.getItem('name');
inputs[1].value = localStorage.getItem('email');
inputs[2].value = localStorage.getItem('phone');
inputs[3].value = localStorage.getItem('date');

// //first form script
let isValidEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true

    let formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        date: e.target[3].value
    }
    console.log(formData);
    if(!checks[0].classList.contains('active')){
        isValid = false
    }
    if(!checks[1].classList.contains('active')){
        isValid = false
    }
    if(!checks[2].classList.contains('active')){
        isValid = false
    }
    if(!checks[3].classList.contains('active')){
        isValid = false
    }
    if(isValid){
        location.href ='secondForm.html';
    }
}
    


);
closeBtn.addEventListener('click',() =>{
    alertBox.classList.remove('active');
})

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
    if((checks[2], checks[1], checks[2], checks[3]).classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= ''
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
    if((checks[2], checks[1], checks[2], checks[3]).classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= ''
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
    if((checks[2], checks[1], checks[2], checks[3]).classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= ''
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
    if((checks[2], checks[1], checks[2], checks[3]).classList.contains('active')){
        doublecheck.classList.add('active');
        box.innerText= ''
    }
    localStorage.setItem('date', inputs[3].value);
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
nextBtn.addEventListener('click',() =>{
    if(!nextBtn.hasAttribute('onclick')){
        alertBox.classList.add('active');
        alertText.innerHTML = 'Fill Inputs Correctly'
    }
})
