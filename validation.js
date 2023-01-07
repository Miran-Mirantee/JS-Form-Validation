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

// remove 'error' class from message
const removeError = (message) => {
    message.textContent = '';
    message.classList.remove('error');
}

// check if password and password confirmation is the same
const confirmPassword = () => {
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity(' ');
    }
    else {
        passwordConfirm.setCustomValidity('');
    }
    if (passwordConfirm.validity.valid) {
        removeError(errorPasswordConfirmMsg);
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

// display error message after failed validation
const displayError = () => {
    errorMailMsg.classList.add('error');
    if (mail.validity.valueMissing) {
        errorMailMsg.textContent = "Enter the email first!";
    }
    else if (mail.validity.typeMismatch) {
        errorMailMsg.textContent = "This isn't an email!";
    }
    else {
        errorMailMsg.classList.remove('error');
    }

    errorCountryMsg.classList.add('error');
    if (country.validity.valueMissing) {
        errorCountryMsg.textContent = "Enter your country!";
    }
    else if (country.validity.patternMismatch) {
        errorCountryMsg.textContent = "There's no numeric letter in country name, try again!";
    }
    else {
        errorCountryMsg.classList.remove('error');
    }

    errorZipcodeMsg.classList.add('error');
    if (zipcode.validity.valueMissing) {
        errorZipcodeMsg.textContent = "Don't forget to enter zipcode!";
    }
    else if (zipcode.validity.patternMismatch) {
        errorZipcodeMsg.textContent = "Enter number only!";
    }
    else if (zipcode.validity.tooShort) {
        errorZipcodeMsg.textContent = " Zipcode always has EXACTLY 5 DIGITS!";
    }
    else {
        errorZipcodeMsg.classList.remove('error');
    }

    errorPasswordMsg.classList.add('error');
    if (password.validity.valueMissing) {
        errorPasswordMsg.textContent = "Please enter the password!";
    }
    else if (password.validity.patternMismatch) {
        errorPasswordMsg.textContent = "Password must contains at least one number, one uppercase letter and one lowercase letter, and length should be at least 8 characters";
    }
    else {
        errorPasswordMsg.classList.remove('error');
    }

    errorPasswordConfirmMsg.classList.add('error');
    if (passwordConfirm.validity.valueMissing) {
        errorPasswordConfirmMsg.textContent = "Don't forget to enter this field!";
    }
    else {
        confirmPassword();
    }

};

form.addEventListener('submit', (e) => {
    displayError();
    // prevent form from submitting
    let result = checkAllFieldsValidity();
    if (!result) {
        e.preventDefault();
    }
});

mail.addEventListener('input', () => {
    if (mail.validity.valid) {
        removeError(errorMailMsg);
    }
    else {
        displayError();
    }
});

country.addEventListener('input', () => {
    if (country.validity.valid) {
        removeError(errorCountryMsg);
    }
    else {
        displayError();
    }
});

zipcode.addEventListener('input', () => {
    if (zipcode.validity.valid) {
        removeError(errorZipcodeMsg);
    }
    else {
        displayError();
    }
})

password.addEventListener('input', () => {
    if (password.validity.valid) {
        removeError(errorPasswordMsg);
    }
    else {
        displayError();
    }
});

passwordConfirm.addEventListener('input', () => {
    displayError();
});