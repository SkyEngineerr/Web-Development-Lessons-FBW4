//Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


//Implementing the validators
function validateName (){
    const name = document.getElementById('name');
    const re = /^[a-z]{2,8}$/i; 
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validateZip (){
    const name = document.getElementById('zip');
    const re = /^[a-z]{2,8}$/i; 
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validateEmail (){
    const name = document.getElementById('email');
    const re = /^[a-z]{2,8}$/i; 
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validatePhone (){
    const name = document.getElementById('phone');
    const re = /^[a-z]{2,8}$/i; 
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}