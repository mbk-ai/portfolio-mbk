// ========================================
// MOTASIM BIN KAMAL - PORTFOLIO
// Vanilla JavaScript - Interactive Features
// ========================================

// ========================================
// DOM INITIALIZATION & UTILITIES
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

/**
 * Initialize all portfolio features
 */
function initializePortfolio() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100
    });

    // Core functionality
    setupNavigation();
    setupScrollProgress();
    setupScrollToTop();
    setupCounterAnimation();
    setupTypingEffect();
    setupContactForm();
    setupSmoothScroll();
    setupMobileMenu();
    setupActiveNavigation();
}

// ========================================
// NAVIGATION & MENU
// ========================================

/**
 * Setup responsive navigation
 */
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Handle navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth <= 768) {
        hamburger.style.display = 'flex';
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.style.display = 'none';
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Setup active navigation highlighting
 */
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// SCROLL FEATURES
// ========================================

/**
 * Setup scroll progress indicator
 */
function setupScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

/**
 * Setup scroll to top button
 */
function setupScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// ANIMATIONS & EFFECTS
// ========================================

/**
 * Setup typing effect for hero title
 */
function setupTypingEffect() {
    const typingElement = document.querySelector('.typing');
    if (!typingElement) return;

    const text = typingElement.textContent;
    typingElement.textContent = '';

    let charIndex = 0;
    const typingSpeed = 50;

    function type() {
        if (charIndex < text.length) {
            typingElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    // Start typing after page load
    setTimeout(type, 500);
}

/**
 * Setup counter animation for statistics
 */
function setupCounterAnimation() {
    const counters = document.querySelectorAll('.counter, .counter-decimal');
    const speed = 200; // Milliseconds per increment

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target') || counter.textContent);

                // Animate counter
                animateCounter(counter, target, speed);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        // Get max value from text
        const maxValue = parseInt(counter.textContent);
        counter.setAttribute('data-target', maxValue);
        counterObserver.observe(counter);
    });
}

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element, target, speed) {
    const increment = Math.ceil(target / (1000 / speed));
    let current = 0;

    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = current;
        }
    }, speed);
}

// ========================================
// CONTACT FORM
// ========================================

/**
 * Setup contact form submission
 */
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const formStatus = document.getElementById('formStatus');

        // Validate form
        if (!name || !email || !subject || !message) {
            showFormStatus('Please fill in all fields', 'error', formStatus);
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            showFormStatus('Please enter a valid email address', 'error', formStatus);
            return;
        }

        // Create mailto link and open it
        const mailtoLink = `mailto:motasim92@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;

        // Show success message
        showFormStatus('Message sent successfully! Please confirm in your email client.', 'success', formStatus);
        
        // Reset form
        form.reset();
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display form status message
 */
function showFormStatus(message, type, element) {
    element.textContent = message;
    element.className = type;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        element.textContent = '';
        element.className = '';
    }, 5000);
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

/**
 * Setup Intersection Observer for scroll animations
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add ripple effect to buttons
 */
function setupRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .contact-card, .skill-card');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

/**
 * Lazy load images
 */
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    }
}

/**
 * Optimize animations for performance
 */
function setupPerformanceOptimizations() {
    // Use requestAnimationFrame for smooth animations
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', debounce(() => {
        lastScrollY = window.scrollY;
    }, 100), { passive: true });

    // Disable animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-base', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }
}

// ========================================
// INITIALIZATION COMPLETE
// ========================================

// Setup ripple effects
document.addEventListener('DOMContentLoaded', setupRippleEffect);

// Setup lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Setup performance optimizations
document.addEventListener('DOMContentLoaded', setupPerformanceOptimizations);

// Setup scroll animations
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// ========================================
// DEBUGGING & DEVELOPMENT
// ========================================

// Log portfolio initialization
console.log('%cMotasim Bin Kamal - Portfolio', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cSQL Server Database Administrator & Infrastructure Specialist', 'color: #06b6d4; font-size: 14px;');
console.log('%cVersion 1.0 | Premium Enterprise Design', 'color: #64748b; font-size: 12px;');

// Export for external use if needed
window.PortfolioUtils = {
    isValidEmail,
    debounce,
    isElementInViewport
};
