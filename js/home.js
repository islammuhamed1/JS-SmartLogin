var logOutBtn=document.getElementById('btnOut');

var welcomeMassage=document.getElementById('welMsg');

if(localStorage.getItem('userName') != null)
{
    welcomeMassage.innerHTML = `Welcome ${localStorage.getItem('userName')}`
}

function logOut()
{
    window.location.href='index.html';
    localStorage.removeItem('userName');
}
logOutBtn.addEventListener('click',logOut)