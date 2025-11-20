// ===================================
// Ultra-Premium 3D Portfolio - Main JavaScript
// ===================================

class Portfolio {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');

        this.init();
    }

    init() {
        this.initSmoothScroll();
        this.initNavigation();
        this.initScrollSpy();
        this.initFormValidation();
        this.initLazyLoading();
    }

    // Smooth scrolling
    initSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Close mobile menu
                    this.navMenu.classList.remove('active');
                }
            });
        });
    }

    // Navigation functionality
    initNavigation() {
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.navToggle.classList.toggle('active');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
            }
        });
    }

    // Scroll spy for active nav links
    initScrollSpy() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -66%'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.setActiveLink(id);
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            if (section.id) {
                observer.observe(section);
            }
        });
    }

    setActiveLink(id) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }

    // Form validation and submission
    initFormValidation() {
        const form = document.getElementById('contact-form');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const formData = new FormData(form);
                const data = Object.fromEntries(formData);

                // Basic validation
                if (this.validateForm(data)) {
                    this.submitForm(data);
                }
            });
        }
    }

    validateForm(data) {
        const { name, email, subject, message } = data;

        if (!name || !email || !subject || !message) {
            this.showNotification('Please fill in all fields', 'error');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return false;
        }

        return true;
    }

    submitForm(data) {
        // Simulate form submission
        console.log('Form submitted:', data);
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        document.getElementById('contact-form').reset();
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(236, 72, 153, 0.2)'};
            border: 1px solid ${type === 'success' ? '#00ff88' : '#ec4899'};
            border-radius: 12px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            backdrop-filter: blur(20px);
            animation: slideInRight 0.5s ease-out;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Lazy loading for images
    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Utility functions
const utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Initialize portfolio when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Portfolio();
    });
} else {
    new Portfolio();
}

// Add notification animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
