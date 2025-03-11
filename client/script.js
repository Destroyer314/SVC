
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle functionality
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.display = 'none';
        
        // Add button to nav
        nav.insertBefore(mobileMenuBtn, navLinks);
        
        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Handle responsive design
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                navLinks.classList.add('mobile');
                if (!navLinks.classList.contains('active')) {
                    navLinks.style.display = 'none';
                }
            } else {
                mobileMenuBtn.style.display = 'none';
                navLinks.classList.remove('mobile', 'active');
                navLinks.style.display = 'flex';
            }
        };
        
        // Initial call and event listener
        handleResize();
        window.addEventListener('resize', handleResize);
    };
    
    // Add smooth scrolling for anchor links
    const addSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    
    // Add animation to cards on page scroll
    const addScrollAnimations = () => {
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(animateOnScroll, {
            root: null,
            threshold: 0.1
        });
        
        const cards = document.querySelectorAll('.card, .resource-card, .program-card, .team-member, .tier, .partner, .option');
        cards.forEach(card => {
            card.classList.add('fade-in');
            observer.observe(card);
        });
    };
    
    // Initialize all functions
    createMobileMenu();
    addSmoothScrolling();
    
    // Add scroll animations if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        addScrollAnimations();
    }
    
    // Add additional CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.animate {
            opacity: 1;
            transform: translateY(0);
        }
        .mobile-menu-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--primary-color);
        }
        .nav-links.mobile {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .nav-links.mobile li {
            margin: 0.5rem 0;
        }
        .nav-links.active {
            display: flex !important;
        }
    `;
    document.head.appendChild(style);
});
