const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postalCode = document.querySelector('#postal-code');
const createPassword = document.querySelector('#create-password');
const confirmPassword = document.querySelector('#confirm-password');
const submit = document.querySelector('#submit');

email.addEventListener('input', () => {
    email.validity.typeMismatch ? email.setCustomValidity('Invalid email format') : email.setCustomValidity('');
})

postalCode.addEventListener('input', () => {
    postalCode.validity.patternMismatch ? postalCode.setCustomValidity('Please enter a postcode in the format AB1 2YZ') : 
	postalCode.setCustomValidity('');
})

createPassword.addEventListener('input', () => {
	createPassword.validity.patternMismatch ? createPassword.setCustomValidity('Password must contain a capital letter, a number and a special character') : 
	createPassword.setCustomValidity('');
});

confirmPassword.addEventListener('input', () => {
    (createPassword.value != confirmPassword.value) ? confirmPassword.setCustomValidity('Passwords do not match') :
	(confirmPassword.setCustomValidity(''), console.log('Password success.'))
});

submit.addEventListener('click', () => {
    
});