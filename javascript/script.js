// Add this JavaScript code to your website
let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 100; // Minimum scroll amount before hiding/showing
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            // Show header when scrolling up or at the top
            if (currentScroll < lastScrollTop || currentScroll < scrollThreshold) {
                header.classList.remove('header-hidden');
            } 
            // Hide header when scrolling down and past threshold
            else if (currentScroll > scrollThreshold) {
                header.classList.add('header-hidden');
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            ticking = false;
        });
        
        ticking = true;
    }
});