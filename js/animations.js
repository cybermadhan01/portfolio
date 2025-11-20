// ===================================
// Ultra-Premium 3D Portfolio - Animations Controller
// ===================================

class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.initMagneticButtons();
        this.initCustomCursor();
        this.initCounterAnimations();
        this.initSkillBars();
        this.init3DCards();
    }

    // Scroll-triggered animations
    initScrollAnimations() {
        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animate section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Animate glass cards
        gsap.utils.toArray('.glass-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 60,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        });

        // Timeline animations
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'back.out(1.7)'
            });
        });

        // Parallax effect on hero avatar
        gsap.to('.hero-avatar', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            opacity: 0.5,
            ease: 'none'
        });
    }

    // Magnetic button effect
    initMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.magnetic');

        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const moveX = x * 0.3;
                const moveY = y * 0.3;

                gsap.to(button, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
    }

    // Custom cursor
    initCustomCursor() {
        const cursor = document.querySelector('.custom-cursor');
        const follower = document.querySelector('.cursor-follower');

        if (!cursor || !follower) return;

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation
        const animateCursor = () => {
            // Cursor
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

            // Follower with delay
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;

            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform += ' scale(2)';
                follower.style.transform += ' scale(1.5)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = cursor.style.transform.replace(' scale(2)', '');
                follower.style.transform = follower.style.transform.replace(' scale(1.5)', '');
            });
        });
    }

    // Counter animations
    initCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));

            ScrollTrigger.create({
                trigger: counter,
                start: 'top 80%',
                onEnter: () => this.animateCounter(counter, target)
            });
        });
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    // Skill bar animations
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');

            ScrollTrigger.create({
                trigger: bar,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to(bar, {
                        width: `${progress}%`,
                        duration: 1.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    // 3D card tilt effect
    init3DCards() {
        const cards = document.querySelectorAll('.project-card, .service-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = -(x - centerX) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AnimationController();
    });
} else {
    new AnimationController();
}
