document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');
    
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.style.display = 'none';
        successMessage.style.display = 'none';
    } else {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a.';
        emailError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    if (password.length > 8) {
        passwordError.style.display = 'none';
        successMessage.style.display = 'none';
    } else {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        passwordError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

function handleSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    if (email.length > 3 && email.includes('@') && email.includes('.') && password.length > 8) {
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        successMessage.textContent = 'All good to go!';
        successMessage.style.display = 'block';

        if (confirm('Do you want to sign up?')) {
            alert('Successful signup!');
            document.getElementById('signupForm').reset();
            successMessage.style.display = 'none';
        } else {
            document.getElementById('signupForm').reset();
            successMessage.style.display = 'none';
        }
    } else {
        validateEmail();
        validatePassword();
    }
}
