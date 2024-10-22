// JavaScript for Hamburger Menu
const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

// Ensure dropdown is hidden initially
dropdown.style.display = 'none';

hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked'); // Debug line
    // Toggle dropdown visibility
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Optional: Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
