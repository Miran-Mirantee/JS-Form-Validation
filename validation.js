const form = document.querySelector('form');
const mail = document.getElementById('mail');
const country = document.getElementById('country');
const zipcode = document.getElementById('zip-code');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

const errorMailMsg = document.querySelector('#mail + span');
const errorCountryMsg = document.querySelector('#country + span');
const errorZipcodeMsg = document.querySelector('#zip-code + span');

form.addEventListener('submit', (e) => {
    // prevent form from submitting
    e.preventDefault();
    if (mail.validity.valueMissing) {
        errorMailMsg.textContent = "Enter the email first!";
    }
    if (country.validity.valueMissing) {
        errorCountryMsg.textContent = "Enter your country!";
    }
    if (zipcode.validity.valueMissing) {
        errorZipcodeMsg.textContent = "Don't forget to enter zipcode!";
    }
});

mail.addEventListener('input', () => {
    if (mail.validity.valid) {
        errorMailMsg.textContent = '';
    }
    else {
        if (mail.validity.typeMismatch) {
            errorMailMsg.textContent = "This isn't an email!";
        }
    }
});

country.addEventListener('input', () => {
    if (country.validity.valid) {
        errorCountryMsg.textContent = '';
    }
    else {
        if (country.validity.patternMismatch) {
            errorCountryMsg.textContent = "There's no numeric letter in country name, try again!";
        }
    }
});

zipcode.addEventListener('input', () => {
    if (zipcode.validity.valid) {
        errorZipcodeMsg.textContent = '';
    }
    else {
        if (zipcode.validity.patternMismatch) {
            errorZipcodeMsg.textContent = "Enter number only!";
        }
        else if (zipcode.validity.tooShort) {
            errorZipcodeMsg.textContent = " Zipcode always has EXACTLY 5 DIGITS!";
        }
    }
})


