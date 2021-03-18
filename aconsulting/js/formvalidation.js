let form = document.querySelector('form');

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let submitInput = document.querySelector('#submit');
let timeInput = document.querySelector('#time');

submitInput.addEventListener('click', function(){
    e.preventDefault();
    if (emailInput.value.indexOf("@") == -1 ) {
        alert("Please, write down you Name or correct E-mail address")
    } else if (nameInput.value.length === 0) {
        alert("Write, please, correct name");
    } else if (timeInput.value == ""){
        alert("Choose the time");
    } else {
        alert("Thank you, your appointment was being booked");
    }
    });