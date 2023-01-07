const form = document.querySelector('form');
const mail = document.getElementById('mail');
const country = document.getElementById('country');
const zipcode = document.getElementById('zip-code');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

const errorMailMsg = document.querySelector('#mail + span');
const errorCountryMsg = document.querySelector('#country + span');
const errorZipcodeMsg = document.querySelector('#zip-code + span');
const errorPasswordMsg = document.querySelector('#password + span');
const errorPasswordConfirmMsg = document.querySelector('#password-confirm + span');

// check if password and password confirmation is the same
const confirmPassword = () => {
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity(' ');
    }
    else {
        passwordConfirm.setCustomValidity('');
    }
    if (passwordConfirm.validity.valid) {
        errorPasswordConfirmMsg.textContent = '';
    }
    else {
        errorPasswordConfirmMsg.textContent = "Password doesn't match!";
    }
};

// check if all field is valid
const checkAllFieldsValidity = () => {
    let result = true;
    for (let input of form) {
        if (!input.validity.valid) {
            result = false;
        }
    }
    return result;
};

form.addEventListener('submit', (e) => {
    // prevent form from submitting
    if (mail.validity.valueMissing) {
        errorMailMsg.textContent = "Enter the email first!";
    }
    if (country.validity.valueMissing) {
        errorCountryMsg.textContent = "Enter your country!";
    }
    if (zipcode.validity.valueMissing) {
        errorZipcodeMsg.textContent = "Don't forget to enter zipcode!";
    }
    if (password.validity.valueMissing) {
        errorPasswordMsg.textContent = "Please enter the password!";
    }
    if (passwordConfirm.validity.valueMissing) {
        errorPasswordConfirmMsg.textContent = "Don't forget to enter this field!";
    }
    else {
        confirmPassword();
    }
    let result = checkAllFieldsValidity();
    if (!result) {
        e.preventDefault();
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

password.addEventListener('input', () => {
    if (password.validity.valid) {
        errorPasswordMsg.textContent = '';
    }
    else {
        if (password.validity.patternMismatch) {
            errorPasswordMsg.textContent = "Password must contains at least one number, one uppercase letter and one lowercase letter, and length should be at least 8 characters";
        }
    }
});

passwordConfirm.addEventListener('input', () => confirmPassword());