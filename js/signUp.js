var userNameInput = document.getElementById('userNameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signUpBtn = document.getElementById('btnSignUp');
var alertMassage = document.getElementById('warnMsg');
var allElements = [];

if (localStorage.getItem('Users') != null) {
    allElements = JSON.parse(localStorage.getItem('Users'));
}


function signUp() {
    var data = {
        userName: userNameInput.value,
        email: emailInput.value,
        passwrod: passwordInput.value
    }
    if (checkInputsEmpty() == true) {
        getAlertMessage('All Inputs Required', 'red');
    }
    else {
        if(checkEmailExist() == true)
        {
            getAlertMessage('Email Already Exist', 'red');
        }
        else
        {
            allElements.push(data);
            localStorage.setItem('Users', JSON.stringify(allElements));
            clrFrorm();
            getAlertMessage('Success', 'green');
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function clrFrorm() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function checkInputsEmpty() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
function checkEmailExist() {
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].email == emailInput.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)

