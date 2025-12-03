// Download CV functionality
function downloadPDF() {
    const fileName = 'Hamza Mughales CV';
    const link = document.createElement('a');
    link.href = 'assets/cv/Hamza Mughales CV.pdf';
    link.download = fileName;
    link.target = '_blank';
    link.click();
}

const downloadBtn = document.getElementById('download-cv');
if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadPDF);
}

// Smooth scroll animation for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== 'javascript:void(0)') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Scroll animations - fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle functionality
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('ul.nav');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.classList.toggle('is-active');
            navMenu.classList.toggle('show');
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('is-active');
                navMenu.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Sticky navbar on scroll
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                navbar.classList.add('affix');
            } else {
                navbar.classList.remove('affix');
            }
        });
    }
    
    // Scroll animations
    const elementsToAnimate = document.querySelectorAll(
        '.portfolio-card, .blog-card, .skill-category, section'
    );
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // Add fade-in class to body
    document.body.classList.add('loaded');
    
    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.navbar .nav .link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Add typing effect to header subtitle (optional enhancement)
    const headerTagline = document.querySelector('.header-tagline');
    if (headerTagline) {
        const text = headerTagline.textContent;
        headerTagline.textContent = '';
        headerTagline.style.opacity = '1';
        let i = 0;
        
        setTimeout(() => {
            const typeWriter = () => {
                if (i < text.length) {
                    headerTagline.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            typeWriter();
        }, 1000);
    }
});
