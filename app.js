const reservationForm = document.querySelector('.reservation-form');
const nameInput = document.getElementById('name');
const contactInput = document.getElementById('contact');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const paxInput = document.getElementById('pax');


reservationForm.addEventListener('submit', function (event) {
    if (nameInput.value === '' || contactInput.value === '' || dateInput.value === '' || timeInput.value === '' || paxInput.value === '') {
        event.preventDefault(); 
        alert('Please fill out all fields.'); 
    }
});

