// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close if it's a dropdown toggle on mobile
            if (window.innerWidth <= 968 && link.parentElement.classList.contains('dropdown')) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            } else {
                navMenu.classList.remove('active');
            }
        });
    });
}

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

if (testimonialCards.length > 0 && dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all cards and dots
            testimonialCards.forEach(card => card.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to selected card and dot
            testimonialCards[index].classList.add('active');
            dot.classList.add('active');
        });
    });

    // Auto-rotate testimonials every 5 seconds
    let currentSlide = 0;
    setInterval(() => {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        
        testimonialCards[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }, 5000);
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - navHeight,
                behavior: 'smooth'
            });
        }
    });
});
