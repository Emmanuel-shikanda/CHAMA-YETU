let form = document.getElementById('support-form');

form.addEventListener('submit',function(event){

event.preventDefault();


let fullNameLabel=document.getElementById('full-name-label');
let userNameinput=document.getElementById('full-name').value;

let namePattern = /^[A-Za-z]+(?: [A-Za-z]+)+$/;

if(userNameinput.length<3){
    fullNameLabel.textContent='Name-too-short';
    fullNameLabel.style.color='red';

setTimeout(function(){
fullNameLabel.textContent='Your full Name';
    fullNameLabel.style.color='';
},4000)

return;
}

//name-validation
if(!namePattern.test(userNameinput)){
    fullNameLabel.textContent='invalid-Name';
    fullNameLabel.style.color='red';

setTimeout(function(){
fullNameLabel.textContent='Your full Name';
    fullNameLabel.style.color='';
},4000)

return;
}

let phoneLabel = document.getElementById('phone-label');
let userPhone  = document.getElementById('phone').value;

let phonePattern =  /^(?:\+254|254|0)(?:7|1)\d{8}$/;

if(!phonePattern.test(userPhone)){
phoneLabel.textContent='invalid-phone-number';
phoneLabel.style.color='red';

setTimeout(function(){
phoneLabel.textContent='Phonenumber / M-pesa line';
phoneLabel.style.color='';

},4000)

return;

}

//text-area

let textAreaLabel=document.getElementById('message-label');
let msgValue=document.getElementById('message').value;

if(msgValue.length  < 10){
textAreaLabel.textContent='This cant be this short';
textAreaLabel.style.color='red';

setTimeout(function(){
textAreaLabel.textContent='Describe your issue ';
textAreaLabel.style.color='';

},4000)

}






})