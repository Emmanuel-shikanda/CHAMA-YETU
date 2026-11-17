
const form = document.getElementById('login-form');

let userPassword = document.getElementById('login-password');

form.addEventListener('submit',function(event){

    event.preventDefault();

    //email-valodation

let userEmail = document.getElementById('login-email').value.trim();
let emailLabel=document.getElementById('email-label');

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(userEmail)){
emailLabel.textContent="invalid email";
emailLabel.style.color='red';

setTimeout(function(){
emailLabel.textContent="Enter email";
emailLabel.style.color='';

},3000)

return;
}


//password-validation


})





let passwordToogle=document.getElementsByClassName('password-toggle')[0];

let eyetoogleImg = document.getElementById('password-eye');

//eye-changer

passwordToogle.addEventListener('click',function(){


    if(userPassword.type ==='password'){
     userPassword.type='text';
    
     eyetoogleImg.src='/assets/images/icons8-eye-100.png';

    }
   else{
 userPassword.type='password';
eyetoogleImg.src='/assets/images/icons8-closed-eye-100.png';

   }

})



























