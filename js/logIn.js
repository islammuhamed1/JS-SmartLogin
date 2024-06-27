var emailLoginInput = document.getElementById('emailLoginInput');
var passwordLoginInput = document.getElementById('passwordLoginInput');
var loginBtn = document.getElementById('btnLogin');
var alertMassage=document.getElementById('alertMassage');


var allElements = [];


if (localStorage.getItem('Users') != null) {
    allElements = JSON.parse(localStorage.getItem('Users'));
}
function logIn() {
    if(checkInputsEmpty() == true)
    {
        getAlertMessage('All Inputs Required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            window.location.href='home.html';
        }
        else
        {
            getAlertMessage('Email or Password notCorrect','red');
        }
    }
   
}
function checkEmailPassword() {
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].email == emailLoginInput.value && allElements[i].passwrod == passwordLoginInput.value) {
            localStorage.setItem('userName',allElements[i].userName)
            return true;
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn);