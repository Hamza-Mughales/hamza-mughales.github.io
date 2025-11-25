/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Navbar toggle - Pure JavaScript (no jQuery)
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('ul.nav');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('is-active');
            navMenu.classList.toggle('show');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('is-active');
                navMenu.classList.remove('show');
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
});