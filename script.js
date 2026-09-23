const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('bg-[#111111]/95', 'backdrop-blur');
    } else {
        navbar.classList.remove('bg-[#111111]/95', 'backdrop-blur');
    }
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('text-gold');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-gold');
        }
    });
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Accordion toggle
function toggleAccordion(id) {
    const content = document.getElementById(id + '-content');
    const icon = document.getElementById(id + '-icon');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '−';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
    }
}

// Fade-up animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(section);
});

// Staggered delay for grid items
document.querySelectorAll('.grid > *').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});