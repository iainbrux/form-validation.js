const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postalCode = document.querySelector('#postal-code');
const createPassword = document.querySelector('#create-password');
const confirmPassword = document.querySelector('#confirm-password');
const submit = document.querySelector('#submit');

email.addEventListener('input', () => {
    email.validity.typeMismatch ? email.setCustomValidity('Invalid email format') : console.log('Success');
})

postalCode.addEventListener('input', () => {
    postalCode.validity.patternMismatch ? postalCode.setCustomValidity('Please enter a postcode in the format JE12 3YZ') : console.log('Success');
})

createPassword.addEventListener('input', () => {
    (createPassword.validity.rangeUnderflow || createPassword.validity.rangeOverflow) ? createPassword.setCustomValidity('Please enter a password between 8 and 30 characters') : console.log('Success');
})

submit.addEventListener('click', (e) => {
    confirmPassword.value != createPassword.value ? ( e.preventDefault(),
        confirmPassword.setCustomValidity('Passwords do not match')) 
        : console.log('Success');
    createPassword.validity.patternMismatch ? createPassword.setCustomValidity('Password must contain a number, a capital letter, and a symbol from either !@$&*#?') : console.log('Success');
})