const loginForm = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem('user'));
  
  if (storedUser && storedUser.email === emailInput.value && storedUser.password === passwordInput.value) {
    // If credentials are correct, set login state and redirect to home.html
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    // If credentials are incorrect, show error message
    errorMessage.innerText = 'Invalid email or password';
  }
});

// Clear error states on input
const allLoginInputs = [emailInput, passwordInput];
allLoginInputs.forEach(input => {
  input.addEventListener('input', () => {
    errorMessage.innerText = '';
  });
});
