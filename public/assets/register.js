

const form = document.getElementById('register-form');

//PASSWORD-DOWN-ENTHERE

let userpassword = document.getElementById('password');
let confirmuserpassword = document.getElementById('confirm-password')

form.addEventListener('submit',function(event){

event.preventDefault();

//user-name-input

let fullnameLabel=document.getElementById('full-name-label');

let userfullnameinput = document.getElementById('full-name').value.trim();

let namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

if(userfullnameinput.length < 3){

    fullnameLabel.textContent='Name too short';
    fullnameLabel.style.color='red';

  setTimeout(function(){
     fullnameLabel.textContent='Full Name';
    fullnameLabel.style.color='';
    },4000)

    return;

}

if(!namePattern.test(userfullnameinput)){

    fullnameLabel.textContent='Enter valid name pliz';
    fullnameLabel.style.color='red';

    setTimeout(function(){
    fullnameLabel.textContent='Full Name';
    fullnameLabel.style.color='';
    },4000)

    return;

}



//email-validation

let emailLabel = document.getElementById('email-label');
let useremailInput = document.getElementById('email').value;

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(useremailInput)){
emailLabel.textContent="invalid email";
emailLabel.style.color='red';

setTimeout(function(){
emailLabel.textContent="Enter email";
emailLabel.style.color='';

},3000)

return;
}

//Mpesa-phone-number

let phoneLabel = document.getElementById('phone-label');

let userPhone = document.getElementById('phone').value;

let hintId = document.getElementById('form-hint-id');

let phonePattern = /^(?:\+254|254|0)(?:7|1)\d{8}$/;

if(!phonePattern.test(userPhone)){
phoneLabel.textContent="invalid M-pesa number";
phoneLabel.style.color='red'
hintId.style.color='red'

setTimeout(function(){
phoneLabel.textContent="phone number";
phoneLabel.style.color='';
hintId.style.color="";

},6000)

return;
}







let passwordLabel=document.getElementById('password-label');

let userpasswordvalue = userpassword.value;

if(userpasswordvalue.length < 8){
passwordLabel.textContent='password should have at least 8 characters';

passwordLabel.style.color='red';

setTimeout(function(){
passwordLabel.textContent='password';

passwordLabel.style.color='';
},4000)

return;

}

if(!/[A-Z]/.test(userpasswordvalue)){
passwordLabel.textContent='password should have at least a capital letter';

passwordLabel.style.color='red';

setTimeout(function(){
passwordLabel.textContent='password';

passwordLabel.style.color='';
},4000)

return;

}

if(!/[0-9]/.test(userpasswordvalue)){
passwordLabel.textContent='password should have at least a number ';

passwordLabel.style.color='red';

setTimeout(function(){
passwordLabel.textContent='password';

passwordLabel.style.color='';
},4000)

return;

}

if(!/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(userpasswordvalue)){
passwordLabel.textContent='password should have at least a special character @/:{} ';

passwordLabel.style.color='red';

setTimeout(function(){
passwordLabel.textContent='password';

passwordLabel.style.color='';
},4000)

return;

}


let confirmuserpasswordValue=confirmuserpassword.value;

let confrimpasslabel=document.getElementById('confirm-password-label');

if( confirmuserpasswordValue !== userpasswordvalue  ){

confrimpasslabel.textContent='passwordS do not match '
confrimpasslabel.style.color='red';

passwordLabel.textContent='passwordS do not match '
passwordLabel.style.color='red';

setTimeout(function(){
confrimpasslabel.textContent='Confirm password'
confrimpasslabel.style.color='';

passwordLabel.textContent='password '
passwordLabel.style.color='';


},5000)

}else{


confrimpasslabel.textContent='passwords  match '
confrimpasslabel.style.color='green';

passwordLabel.textContent='passwords match '
passwordLabel.style.color='green';

}

form.submit();


})


//password-view-eye-ball


let btnToogle = document.getElementById('eye-toggle');
let eyePaasword=document.getElementById('password-eye');

btnToogle.addEventListener('click',function(){

    
if(userpassword.type==='password'){
userpassword.type='text';
eyePaasword.src='/assets/images/icons8-eye-100.png';

}
else{
userpassword.type='password';
eyePaasword.src='/assets/images/icons8-closed-eye-100.png';

}
})



let confirmToogle = document.getElementById('confirm-eye');
let confirmimg =document.getElementById('confirm-img');


confirmToogle.addEventListener('click',function(){

    
if(confirmuserpassword.type==='password'){
confirmuserpassword.type='text';
confirmimg.src='/assets/images/icons8-eye-100.png';

}
else{
confirmuserpassword.type='password';
confirmimg.src='/assets/images/icons8-closed-eye-100.png';

}
})






















































































