let form =document.getElementById('creat-chama-form');

form.addEventListener('submit',function(event){

    event.preventDefault();

let chamaNameLabel=document.getElementById('cc-name-label');
let  chamainput = document.getElementById('cc-name').value;

let chamaPattern = /^[A-Za-z0-9]+(?:[ -][A-Za-z0-9]+)*$/;


if(!chamaPattern.test(chamainput)){

 chamaNameLabel.textContent='name-invalid'
    chamaNameLabel.style.color='red';

    setTimeout(function(){
    chamaNameLabel.textContent='Chama name'
    chamaNameLabel.style.color='';

    },4000)

return;

}


if(chamainput.length < 3){

    chamaNameLabel.textContent='name-too-short'
    chamaNameLabel.style.color='red';

    setTimeout(function(){
    chamaNameLabel.textContent='Chama name'
    chamaNameLabel.style.color='';

    },4000)

return;

}


let amountLabel = document.getElementById('amount-label');
let amountInput = document.getElementById('cc-amount').value;
let amountPattern = /^\d+(?:\.\d{1,2})?$/;



if(!amountPattern.test(amountInput)){

     amountLabel.textContent='invalid amount'
    amountLabel.style.color='red';

    setTimeout(function(){
    amountLabel.textContent='Contribution amount (KES)'
    amountLabel.style.color='';

    },4000)

return;


}


if(amountInput < 50 || amountInput<=0){

     amountLabel.textContent='Amount cannot be less than 50'
    amountLabel.style.color='red';

    setTimeout(function(){
    amountLabel.textContent='Contribution amount (KES)'
    amountLabel.style.color='';

    },4000)

return;


}


let slotsLabel = document.getElementById('slotsLabel');
let  inputslots = document.getElementById('cc-members').value;

if(inputslots < 3){

     slotsLabel.textContent='Not-less-than-3-slots'
     slotsLabel.style.color='red';

    setTimeout(function(){
    slotsLabel.textContent='Number of slots'
    slotsLabel.style.color='';

    },4000)

return;


}


let inviteLabel=document.getElementById('invite-Label');
let innviteInput = document.getElementById('cc-code').value;
let codePatttern=/^[A-Za-z0-9]{4,16}$/;

if(!codePatttern.test(innviteInput)){

  inviteLabel.textContent='INVALID-CODE'
     inviteLabel.style.color='red';

    setTimeout(function(){
    inviteLabel.textContent='Invitation code'
    inviteLabel.style.color='';

    },4000)

return;


}

//-text-area

let msgLabel = document.getElementById('msgLabel');
let msginput=document.getElementById('cc-desc').value;

if(msginput.length < 15){

  msgLabel.textContent=`${msginput}  is Too short`
     msgLabel.style.color='red';

    setTimeout(function(){
    msgLabel.textContent='Description'
    msgLabel.style.color='';

    },4000)

return;
}








})





let userDate = document.getElementById('cc-start');

let today = new Date();

let year = today.getFullYear();

let month = String(today.getMonth() + 1).padStart(2, '0');

let day = String(today.getDate()).padStart(2, '0');

let todayD= year + '-' + month + '-' + day;

console.log(todayD)

userDate.setAttribute('min', todayD);

































