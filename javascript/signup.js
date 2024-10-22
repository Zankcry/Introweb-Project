const signupForm = document.getElementById('signup-form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');
const success_message = document.createElement('p');
success_message.className = 'success-message';
signupForm.appendChild(success_message);

// Handle signup form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
  
  if (errors.length > 0) {
    error_message.innerText = errors.join(". ");
    success_message.innerText = '';
  } else {
    localStorage.setItem('user', JSON.stringify({
      firstname: firstname_input.value,
      email: email_input.value,
      password: password_input.value
    }));
    error_message.innerText = '';
    success_message.innerText = 'Signup successful! You can now log in.';
  }
});

// Function to validate signup form
function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];
  if (firstname === '') {
    errors.push('Firstname is required');
  }
  if (email === '') {
    errors.push('Email is required');
  }
  if (password === '') {
    errors.push('Password is required');
  }
  if (password.length < 8) {
    errors.push('Password must have at least 8 characters');
  }
  if (password !== repeatPassword) {
    errors.push('Passwords do not match');
  }
  return errors;
}

// Clear error states on input
const allInputs = [firstname_input, email_input, password_input, repeat_password_input];
allInputs.forEach(input => {
  input.addEventListener('input', () => {
    error_message.innerText = '';
    success_message.innerText = '';
  });
});
